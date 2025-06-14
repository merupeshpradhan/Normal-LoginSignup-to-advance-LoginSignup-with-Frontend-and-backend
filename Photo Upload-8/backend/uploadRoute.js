import express from 'express';
import multer from 'multer';
import fs from 'fs';
import { cloudinary } from './cloudinary.js';

const router = express.Router();

// Use multer memory storage (we won’t save to local folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // still need this to temporarily save the file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const response = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads', // optional: put images in a Cloudinary folder
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: 'Upload successful',
      url: response.secure_url,
    });
  } catch (err) {
    res.status(500).json({ message: 'Cloudinary upload failed', error: err.message });
  }
});

export default router;
