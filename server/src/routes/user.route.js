import { Router } from "express";
import { loginUser, userRegister } from "../controllers/user.controller.js";

const router = Router();

router.route("/registerUser").post(userRegister);
router.route("/login").post(loginUser);

export default router;
