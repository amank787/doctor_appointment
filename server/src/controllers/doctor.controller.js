import { User } from "../models/user.model.js";
import { Doctor } from "../models/doctor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// ✅ Update or create doctor profile
const updatedDoctorProfile = asyncHandler(async (req, res) => {
  const { specialty, bio, feeCents, approved, availability } = req.body;

  const doctor = await Doctor.findOne({ userId: req.user._id });

  if (!doctor) {
    try {
      await Doctor.create({
        userId: req.user._id,
        specialty,
        bio,
        feeCents,
        approved,
        availability,
      });

      return res.status(200).json(new ApiResponse(200, {}, "Doctor created"));
    } catch (error) {
      throw new ApiError(500, error?.message || "Failed to save doctor");
    }
  }

  const updatedDoctor = await Doctor.findOneAndUpdate(
    { userId: req.user._id },
    { specialty, bio, feeCents, approved, availability },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, updatedDoctor, "Doctor updated"));
});

// ✅ Get all doctors
const getAllDoctor = asyncHandler(async (req, res) => {
  try {
    const doctors = await Doctor.find()
      .populate("userId", "fullName email")
      .exec();

    return res
      .status(200)
      .json(new ApiResponse(200, doctors, "Doctors fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error fetching doctors");
  }
});

// ✅ Get single doctor by ID
const getDoctorById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id)
      .populate("userId", "fullName email")
      .exec();

    if (!doctor) {
      throw new ApiError(404, "Doctor not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, doctor, "Doctor fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error fetching doctor");
  }
});

export { updatedDoctorProfile, getAllDoctor, getDoctorById };
