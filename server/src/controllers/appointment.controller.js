// controllers/appointment.controller.js
import { Appointment } from "../models/appointment.model.js";
import { Doctor } from "../models/doctor.model.js";
import { User } from "../models/user.model.js";

import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// ✅ Create new appointment (Booking)
export const createAppointment = asyncHandler(async (req, res) => {
  const { patientId, doctorId, date, time, status, reason, priceCents } =
    req.body;

  // Check doctor existence
  const doctor = await Doctor.findById(doctorId);
  if (!doctor) throw new ApiError(404, "Doctor not found");

  // Check patient existence
  const patient = await User.findById(patientId);
  if (!patient) throw new ApiError(404, "Patient not found");

  // ✅ Ensure no overlapping appointment for doctor (same date + time)
  //console.log("Checking for overlap with:", { doctorId, date, time });
  const overlap = await Appointment.findOne({ doctorId, date, time });
  //console.log("Overlap result:", overlap);
  if (overlap) throw new ApiError(400, "Doctor already booked at this time");

  // ✅ Create appointment
  const appointment = await Appointment.create({
    patientId,
    doctorId,
    date,
    time,
    status: status || "pending", // default
    reason,
    priceCents,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(201, appointment, "Appointment created successfully")
    );
});

// ✅ Get all appointments
export const getAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find()
    .populate("patientId", "fullname email")
    .populate("doctorId", "name specialization");

  return res
    .status(200)
    .json(
      new ApiResponse(200, appointments, "Appointments fetched successfully")
    );
});

// ✅ Get single appointment
export const getAppointmentById = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id)
    .populate("patientId", "fullname email")
    .populate("doctorId", "name specialization");

  if (!appointment) throw new ApiError(404, "Appointment not found");

  return res
    .status(200)
    .json(
      new ApiResponse(200, appointment, "Appointment fetched successfully")
    );
});

// ✅ Get all appointments for a specific patient (with nested doctor.userId)
export const getAppointmentsByPatient = asyncHandler(async (req, res) => {
  const { patientId } = req.params;

  const appointments = await Appointment.find({ patientId })
    .populate({
      path: "doctorId",
      populate: {
        path: "userId", // nested populate
        model: "User", // must match your User model name
        select: "fullName email", // fields from User
      },
      select: "specialization bio feeCents address userId", // fields from Doctor
    })
    .populate("patientId", "fullName email");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        appointments,
        "Patient appointments fetched successfully"
      )
    );
});

// ✅ Update appointment status
export const updateAppointmentStatus = asyncHandler(async (req, res) => {
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
});

// ✅ Delete appointment (Cancel)
export const deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);

  if (!appointment) throw new ApiError(404, "Appointment not found");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Appointment deleted successfully"));
});

// ✅ Get booked time slots for a doctor on a specific date
export const getBookedSlotsByDoctorAndDate = asyncHandler(async (req, res) => {
  const { doctorId, date } = req.query;

  if (!doctorId || !date) {
    throw new ApiError(400, "Missing doctorId or date");
  }

  const appointments = await Appointment.find({ doctorId, date }).select(
    "time"
  );

  const bookedSlots = appointments.map((appt) => appt.time);
  //console.log(bookedSlots);

  return res
    .status(200)
    .json(new ApiResponse(200, bookedSlots, "Booked time slots fetched"));
});
