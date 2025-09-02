import { User } from "../models/user.model.js";
import { Doctor } from "../models/doctor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const updatedDoctorProfile = asyncHandler(async (req, res) => {
  // take date from client
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

      return res.status(200).json(new ApiResponse(200, {}, "Doctor updated"));
    } catch (error) {
      throw new ApiError(500, error?.message || "faild doctor saved");
    }
  }

  const updatedDoctor = await Doctor.findOneAndUpdate(
    { userId: req.user._id },
    {
      specialty,
      bio,
      feeCents,
      approved,
      availability,
    },
    { new: true }
  );

  return res.status(200).json(new ApiResponse(200, {}, "Doctor saved"));
});

// Get all appointments

const getAllDoctor = asyncHandler(async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res
      .status(200)
      .json(new ApiResponse(200, doctors, "doctors fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error fetching doctors");
  }
});

export { updatedDoctorProfile, getAllDoctor };
