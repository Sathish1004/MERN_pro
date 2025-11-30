import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    pg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PG",
      required: [true, "PG is required"],
    },
    checkIn: {
      type: Date,
      required: [true, "Check-in date is required"],
    },
    checkOut: {
      type: Date,
    },
    duration: {
      type: Number, // in months
      required: [true, "Duration is required"],
      min: [1, "Duration must be at least 1 month"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
      min: [0, "Amount cannot be negative"],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded"],
      default: "pending",
    },
    paymentDetails: {
      transactionId: String,
      paymentMethod: String,
      paidAt: Date,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Index for queries
bookingSchema.index({ user: 1, status: 1 });
bookingSchema.index({ pg: 1, status: 1 });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
