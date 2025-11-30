import Booking from "../models/Booking.js";
import PG from "../models/PG.js";

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req, res, next) => {
  try {
    const { pg, checkIn, duration, notes } = req.body;

    // Check if PG exists
    const pgData = await PG.findById(pg);

    if (!pgData) {
      return res.status(404).json({
        success: false,
        message: "PG not found",
      });
    }

    // Check availability
    if (pgData.capacity.available <= 0) {
      return res.status(400).json({
        success: false,
        message: "No rooms available in this PG",
      });
    }

    // Calculate total amount
    const totalAmount = pgData.price * duration;

    // Create booking
    const booking = await Booking.create({
      user: req.user.id,
      pg,
      checkIn,
      duration,
      totalAmount,
      notes,
    });

    // Decrease available capacity
    pgData.capacity.available -= 1;
    await pgData.save();

    // Populate booking data
    await booking.populate("pg", "title location price");
    await booking.populate("user", "name email phone");

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's bookings
// @route   GET /api/bookings/user
// @access  Private
export const getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("pg", "title location price images")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private
export const getBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("pg", "title location price images contactInfo")
      .populate("user", "name email phone");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Check if user owns this booking or is the PG owner
    const pg = await PG.findById(booking.pg._id);
    if (
      booking.user._id.toString() !== req.user.id &&
      pg.owner.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to view this booking",
      });
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private
export const updateBooking = async (req, res, next) => {
  try {
    let booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Check authorization
    if (
      booking.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this booking",
      });
    }

    booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Cancel booking
// @route   DELETE /api/bookings/:id
// @access  Private
export const cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Check authorization
    if (
      booking.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to cancel this booking",
      });
    }

    // Update booking status
    booking.status = "cancelled";
    await booking.save();

    // Increase available capacity
    const pg = await PG.findById(booking.pg);
    if (pg) {
      pg.capacity.available += 1;
      await pg.save();
    }

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get bookings for a PG (for owners)
// @route   GET /api/bookings/pg/:pgId
// @access  Private (Owner/Admin)
export const getPGBookings = async (req, res, next) => {
  try {
    const pg = await PG.findById(req.params.pgId);

    if (!pg) {
      return res.status(404).json({
        success: false,
        message: "PG not found",
      });
    }

    // Check if user is the owner
    if (pg.owner.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not authorized to view these bookings",
      });
    }

    const bookings = await Booking.find({ pg: req.params.pgId })
      .populate("user", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};
