import { Router } from "express";
import {
  loginUser,
  logoutUser,
  userRegister,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/registerUser").post(userRegister);
router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

export default router;
