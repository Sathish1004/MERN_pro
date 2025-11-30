import express from "express";
import { getUserDashboard, getAdminDashboard } from "../controllers/dashboardController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// User dashboard
router.get("/user", protect, getUserDashboard);

// Admin dashboard
router.get("/admin", protect, authorize("admin"), getAdminDashboard);

export default router;
