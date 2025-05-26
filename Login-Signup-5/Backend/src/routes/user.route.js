import Router from "express";
import {
  userRegister,
  userLogin,
  userLogout,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", userLogout);

export default router;
