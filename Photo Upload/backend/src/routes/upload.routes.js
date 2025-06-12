import express from "express";
import { upload } from "../utils/upload.js";
import { handleFileUpload } from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/upload", upload.single("photo"), handleFileUpload);

export default router;
