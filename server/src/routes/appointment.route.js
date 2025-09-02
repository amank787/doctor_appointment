import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/", verifyJWT, createAppointment);
router.get("/", verifyJWT, getAppointments);
router.get("/:id", verifyJWT, getAppointmentById);
router.put("/:id/status", verifyJWT, updateAppointmentStatus);
router.delete("/:id", verifyJWT, deleteAppointment);

export default router;
