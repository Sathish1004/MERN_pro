import express from "express";
import {
  createReview,
  getPGReviews,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public route
router.get("/pg/:pgId", getPGReviews);

// Protected routes
router.post("/", protect, createReview);
router.put("/:id", protect, updateReview);
router.delete("/:id", protect, deleteReview);

export default router;
