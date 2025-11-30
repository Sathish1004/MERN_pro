import express from "express";
import { registerAdmin, getAllAdmins } from "../controllers/adminController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// Admin registration (protected by secret key)
router.post("/register", registerAdmin);

// Get all admins (admin only)
router.get("/list", protect, authorize("admin"), getAllAdmins);

export default router;
