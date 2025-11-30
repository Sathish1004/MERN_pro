import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
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
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot exceed 5"],
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      minlength: [10, "Comment must be at least 10 characters"],
      maxlength: [500, "Comment cannot exceed 500 characters"],
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Ensure one review per user per PG
reviewSchema.index({ user: 1, pg: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
