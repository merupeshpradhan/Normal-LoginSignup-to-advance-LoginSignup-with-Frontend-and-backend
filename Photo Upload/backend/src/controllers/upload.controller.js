import { uploadOnCloudinary } from "../utils/upload.js";

export const handleFileUpload = async (req, res) => {
  try {
    const localPath = req.file?.path;

    if (!localPath) {
      return res.status(400).json({ error: "No file provided" });
    }

    const uploaded = await uploadOnCloudinary(localPath);

    return res.status(200).json({
      message: "Uploaded successfully",
      url: uploaded.secure_url,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
