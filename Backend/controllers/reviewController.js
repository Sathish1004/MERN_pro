import Review from "../models/Review.js";
import PG from "../models/PG.js";

// @desc    Create new review
// @route   POST /api/reviews
// @access  Private
export const createReview = async (req, res, next) => {
  try {
    const { pg, rating, comment, images } = req.body;

    // Check if PG exists
    const pgData = await PG.findById(pg);

    if (!pgData) {
      return res.status(404).json({
        success: false,
        message: "PG not found",
      });
    }

    // Check if user already reviewed this PG
    const existingReview = await Review.findOne({
      user: req.user.id,
      pg,
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this PG",
      });
    }

    // Create review
    const review = await Review.create({
      user: req.user.id,
      pg,
      rating,
      comment,
      images: images || [],
    });

    // Update PG rating
    await updatePGRating(pg);

    // Populate review
    await review.populate("user", "name profileImage");

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get reviews for a PG
// @route   GET /api/reviews/pg/:pgId
// @access  Public
export const getPGReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ pg: req.params.pgId })
      .populate("user", "name profileImage")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = async (req, res, next) => {
  try {
    let review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    // Check if user owns this review
    if (review.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this review",
      });
    }

    review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // Update PG rating
    await updatePGRating(review.pg);

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: review,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    // Check if user owns this review or is admin
    if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this review",
      });
    }

    const pgId = review.pg;
    await review.deleteOne();

    // Update PG rating
    await updatePGRating(pgId);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Helper function to update PG rating
const updatePGRating = async (pgId) => {
  const reviews = await Review.find({ pg: pgId });

  if (reviews.length === 0) {
    await PG.findByIdAndUpdate(pgId, {
      "rating.average": 0,
      "rating.count": 0,
    });
  } else {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    await PG.findByIdAndUpdate(pgId, {
      "rating.average": averageRating.toFixed(1),
      "rating.count": reviews.length,
    });
  }
};
