import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  getAllDoctor,
  getDoctorById,
  updatedDoctorProfile,
} from "../controllers/doctor.controller.js";

const router = Router();

router.route("/").get(getAllDoctor);
router.route("/:id").get(getDoctorById);
router.route("/update-profile").post(verifyJWT, updatedDoctorProfile);

export default router;
