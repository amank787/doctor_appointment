// controllers/appointment.controller.js
import { Appointment } from "../models/appointment.model.js";
import { Doctor } from "../models/doctor.model.js";
import { User } from "../models/user.model.js";

import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create new appointment (Booking)

export const createAppointment = asyncHandler(async (req, res) => {
  try {
    const { patientId, doctorId, startTime, endTime, priceCents } = req.body;

    // Check doctor existence
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) throw new ApiError(404, "Doctor not found");

    // Check patient existence
    const patient = await User.findById(patientId);
    if (!patient) throw new ApiError(404, "Patient not found");

    // Ensure no overlapping appointment for doctor
    const overlap = await Appointment.findOne({
      doctorId,
      $or: [
        {
          startTime: { $lt: new Date(endTime) },
          endTime: { $gt: new Date(startTime) },
        },
      ],
    });

    if (overlap) throw new ApiError(400, "Doctor not available at this time");

    const appointment = await Appointment.create({
      patientId,
      doctorId,
      startTime,
      endTime,
      priceCents,
    });

    return res
      .status(201)
      .json(
        new ApiResponse(201, appointment, "Appointment created successfully")
      );
  } catch (error) {
    throw new ApiError(500, error?.message || "Error creating appointment");
  }
});

// Get all appointments

export const getAppointments = asyncHandler(async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patientId", "fullname email")
      .populate("doctorId", "name specialization");

    return res
      .status(200)
      .json(
        new ApiResponse(200, appointments, "Appointments fetched successfully")
      );
  } catch (error) {
    throw new ApiError(500, error?.message || "Error fetching appointments");
  }
});

// Get single appointment

export const getAppointmentById = asyncHandler(async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate("patientId", "fullname email")
      .populate("doctorId", "name specialization");

    if (!appointment) throw new ApiError(404, "Appointment not found");

    return res
      .status(200)
      .json(
        new ApiResponse(200, appointment, "Appointment fetched successfully")
      );
  } catch (error) {
    throw new ApiError(500, error?.message || "Error fetching appointment");
  }
});

// Update appointment status

export const updateAppointmentStatus = asyncHandler(async (req, res) => {
  try {
    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) throw new ApiError(404, "Appointment not found");

    return res
      .status(200)
      .json(new ApiResponse(200, appointment, "Appointment status updated"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error updating appointment");
  }
});

// Delete appointment (Cancel)

export const deleteAppointment = asyncHandler(async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!appointment) throw new ApiError(404, "Appointment not found");

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Appointment deleted successfully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Error deleting appointment");
  }
});
