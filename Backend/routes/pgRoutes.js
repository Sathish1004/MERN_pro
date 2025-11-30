import express from "express";
import {
  getAllPGs,
  getPGById,
  createPG,
  updatePG,
  deletePG,
  getMyPGs,
} from "../controllers/pgController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/", getAllPGs);
router.get("/:id", getPGById);

// Protected routes
router.post("/", protect, authorize("owner", "admin"), createPG);
router.put("/:id", protect, authorize("owner", "admin"), updatePG);
router.delete("/:id", protect, authorize("owner", "admin"), deletePG);
router.get("/owner/me", protect, getMyPGs);

export default router;
