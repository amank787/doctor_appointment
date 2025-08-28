import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { updatedDoctorProfile } from "../controllers/doctor.controller.js";

const router = Router();

router.route("/update-profile").post(verifyJWT, updatedDoctorProfile);

export default router;
