import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
    pg: { type: mongoose.Schema.Types.ObjectId, ref: "PG" },
    amount: { type: Number, required: true },
    method: { type: String, enum: ["Google Pay", "PhonePe", "Paytm", "Card Payment", "UPI", "Cash"], required: true },
    status: { type: String, enum: ["success", "failed", "pending"], default: "success" },
    transactionId: { type: String },
    notes: { type: String },
    meta: { type: Object },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
