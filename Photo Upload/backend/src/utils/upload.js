import multer from "multer";
import fs from "fs";
import { cloudinary } from "./cloudinary.js";

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });

// Upload to Cloudinary
export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder: "user_photos",
    });

    fs.unlinkSync(localFilePath); // remove local file

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    throw error;
  }
};
