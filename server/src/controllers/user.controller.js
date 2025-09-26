// src/controllers/user.controller.js
import { User } from "../models/user.model.js";
import { Doctor } from "../models/doctor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Generate access & refresh tokens
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "User not found for token generation");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error generating access & refresh tokens");
  }
};

// Controller: Register new user
const userRegister = asyncHandler(async (req, res) => {
  try {
    const { fullName, email, password, role, specialty, bio, feeCents } =
      req.body;

    // Validate required fields
    if ([fullName, email, password, role].some((f) => !f?.trim())) {
      throw new ApiError(400, "All required fields must be provided");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ fullName }, { email }] });
    if (existingUser)
      throw new ApiError(409, "User with this email or name already exists");

    // Create user
    const newUser = await User.create({
      fullName,
      email: email.toLowerCase(),
      password,
      role,
    });

    // If role is doctor, create a doctor profile
    if (role === "doctor") {
      try {
        await Doctor.create({
          userId: newUser._id,
          specialty: specialty || "Not specified",
          bio: bio || "",
          feeCents: feeCents || 5000,
          approved: false,
          availability: [],
        });
      } catch (err) {
        console.error("Error creating doctor profile:", err);
        throw new ApiError(500, "Failed to create doctor profile");
      }
    }

    // Fetch created user (without sensitive fields)
    const createdUser = await User.findById(newUser._id).select(
      "-password -refreshToken"
    );

    // Generate tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      newUser._id
    );

    // Send response with cookies
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };
    return res
      .status(201)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          201,
          { user: createdUser, accessToken, refreshToken },
          "User registered successfully"
        )
      );
  } catch (err) {
    // Handle all errors consistently
    if (err instanceof ApiError) {
      return res
        .status(err.statusCode)
        .json(new ApiResponse(err.statusCode, {}, err.message));
    }
    console.error("Unexpected error in userRegister:", err);
    return res
      .status(500)
      .json(new ApiResponse(500, {}, "Something went wrong"));
  }
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) throw new ApiError(400, "Email is required");

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "User does not exist");

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(401, "Invalid credentials");

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = { httpOnly: true, secure: true };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User logged in successfully"
      )
    );
});

// Logout user
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $unset: { refreshToken: 1 } },
    { new: true }
  );

  const options = { httpOnly: true, secure: true };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

// Get all patients
const allPatients = asyncHandler(async (req, res) => {
  try {
    const patients = await User.find({ role: "patient" }).select(
      "-password -refreshToken"
    );
    return res
      .status(200)
      .json(new ApiResponse(200, patients, "Patients fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error fetching patients");
  }
});

export { userRegister, loginUser, logoutUser, allPatients };
