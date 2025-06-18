import { Router } from "express";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlerware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "extraPhoto", maxCount: 1 },
  ]),
  userRegister
);
router.route("/login").post(userLogin);
router.route("/logout").post(userLogout);

export default router;
