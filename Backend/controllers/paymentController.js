import Payment from "../models/Payment.js";
import mongoose from "mongoose";

// @desc    Create a payment record
// @route   POST /api/payments
// @access  Private
export const createPayment = async (req, res, next) => {
  try {
    const { amount, method, booking, pg, notes, meta } = req.body;

    if (!amount || !method) {
      return res.status(400).json({ success: false, message: "amount and method are required" });
    }

    const payment = await Payment.create({
      user: req.user.id,
      amount,
      method,
      booking: booking && mongoose.isValidObjectId(booking) ? booking : undefined,
      pg: pg && mongoose.isValidObjectId(pg) ? pg : undefined,
      notes,
      meta,
      status: "success",
    });

    await payment.populate("pg", "title name location");

    res.status(201).json({ success: true, data: payment });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current user's payments
// @route   GET /api/payments/my
// @access  Private
export const getMyPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find({ user: req.user.id })
      .populate("booking", "totalAmount status")
      .populate("pg", "title location");
    res.status(200).json({ success: true, count: payments.length, data: payments });
  } catch (error) {
    next(error);
  }
};
