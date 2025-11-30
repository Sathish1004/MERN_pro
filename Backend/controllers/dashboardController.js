import User from "../models/User.js";
import PG from "../models/PG.js";
import Booking from "../models/Booking.js";
import Review from "../models/Review.js";

// @desc    Get user dashboard statistics
// @route   GET /api/dashboard/user
// @access  Private
export const getUserDashboard = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get user's bookings
    const bookings = await Booking.find({ user: userId })
      .populate("pg", "title location price images")
      .sort({ createdAt: -1 })
      .limit(10);

    // Get user's reviews
    const reviews = await Review.find({ user: userId })
      .populate("pg", "title")
      .sort({ createdAt: -1 })
      .limit(10);

    // Get booking statistics
    const bookingStats = {
      total: await Booking.countDocuments({ user: userId }),
      pending: await Booking.countDocuments({ user: userId, status: "pending" }),
      confirmed: await Booking.countDocuments({ user: userId, status: "confirmed" }),
      completed: await Booking.countDocuments({ user: userId, status: "completed" }),
    };

    // Get total amount spent
    const paidBookings = await Booking.find({ 
      user: userId, 
      paymentStatus: "paid" 
    });
    const totalSpent = paidBookings.reduce((sum, booking) => sum + booking.totalAmount, 0);

    res.status(200).json({
      success: true,
      data: {
        bookings,
        reviews,
        stats: {
          totalBookings: bookingStats.total,
          activeBookings: bookingStats.pending + bookingStats.confirmed,
          completedBookings: bookingStats.completed,
          totalReviews: reviews.length,
          totalSpent,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get admin dashboard statistics
// @route   GET /api/dashboard/admin
// @access  Private (Admin)
export const getAdminDashboard = async (req, res, next) => {
  try {
    // Total counts
    const totalPGs = await PG.countDocuments();
    const totalUsers = await User.countDocuments({ role: { $ne: "admin" } });
    const totalBookings = await Booking.countDocuments();
    const totalReviews = await Review.countDocuments();

    // Active PGs
    const activePGs = await PG.countDocuments({ isActive: true });

    // Booking statistics
    const pendingBookings = await Booking.countDocuments({ status: "pending" });
    const confirmedBookings = await Booking.countDocuments({ status: "confirmed" });
    const completedBookings = await Booking.countDocuments({ status: "completed" });

    // Revenue calculation
    const paidBookings = await Booking.find({ paymentStatus: "paid" });
    const totalRevenue = paidBookings.reduce((sum, booking) => sum + booking.totalAmount, 0);

    // Recent bookings
    const recentBookings = await Booking.find()
      .populate("user", "name email")
      .populate("pg", "title location price")
      .sort({ createdAt: -1 })
      .limit(10);

    // Recent PGs
    const recentPGs = await PG.find()
      .populate("owner", "name email")
      .sort({ createdAt: -1 })
      .limit(10);

    // Top rated PGs
    const topRatedPGs = await PG.find({ "rating.count": { $gt: 0 } })
      .sort({ "rating.average": -1 })
      .limit(5)
      .select("title location rating images");

    // User statistics
    const userStats = {
      regular: await User.countDocuments({ role: "user" }),
      owners: await User.countDocuments({ role: "owner" }),
      admins: await User.countDocuments({ role: "admin" }),
    };

    res.status(200).json({
      success: true,
      data: {
        stats: {
          totalPGs,
          activePGs,
          totalUsers,
          totalBookings,
          pendingBookings,
          confirmedBookings,
          completedBookings,
          totalReviews,
          totalRevenue,
        },
        userStats,
        recentBookings,
        recentPGs,
        topRatedPGs,
      },
    });
  } catch (error) {
    next(error);
  }
};
