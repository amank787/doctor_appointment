import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  getBookedSlotsByDoctorAndDate,
  updateAppointmentStatus,
  deleteAppointment,
  getAppointmentsByPatient,
} from "../controllers/appointment.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// ✅ Create new appointment
router.post("/", verifyJWT, createAppointment);

// ✅ Get all appointments (admin)
router.get("/", verifyJWT, getAppointments);

// ✅ Get booked slots for a doctor on a date
router.get("/booked-slots", getBookedSlotsByDoctorAndDate);

// ✅ Get appointments for a specific patient (logged-in user)
router.get("/patient/:patientId", verifyJWT, getAppointmentsByPatient);

// ✅ Get single appointment by ID
router.get("/:id", verifyJWT, getAppointmentById);

// ✅ Update appointment status
router.put("/:id/status", verifyJWT, updateAppointmentStatus);

// ✅ Delete appointment
router.delete("/:id", verifyJWT, deleteAppointment);

export default router;
