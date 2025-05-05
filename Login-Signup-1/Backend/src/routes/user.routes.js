import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller";

const router = Router();

router.route("/register", registerUser);
router.route("/login", loginUser);
router.route("/logout", logoutUser);

export default router;
