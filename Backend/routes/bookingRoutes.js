import express from "express";
import {
  createBooking,
  getUserBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
  getPGBookings,
} from "../controllers/bookingController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// All booking routes require authentication
router.post("/", protect, createBooking);
router.get("/user", protect, getUserBookings);
router.get("/:id", protect, getBookingById);
router.put("/:id", protect, updateBooking);
router.delete("/:id", protect, cancelBooking);
router.get("/pg/:pgId", protect, authorize("owner", "admin"), getPGBookings);

export default router;
