import express from "express";
import upload from "../middleware/upload.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// @desc    Upload single image
// @route   POST /api/upload/single
// @access  Private
router.post("/single", protect, upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      data: {
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error uploading file",
      error: error.message,
    });
  }
});

// @desc    Upload multiple images
// @route   POST /api/upload/multiple
// @access  Private
router.post("/multiple", protect, upload.array("images", 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files uploaded",
      });
    }

    const files = req.files.map((file) => ({
      filename: file.filename,
      path: `/uploads/${file.filename}`,
    }));

    res.status(200).json({
      success: true,
      message: "Files uploaded successfully",
      data: files,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error uploading files",
      error: error.message,
    });
  }
});

export default router;
