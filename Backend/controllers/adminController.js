import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";

// @desc    Register new admin
// @route   POST /api/admin/register
// @access  Public (but should be protected in production)
export const registerAdmin = async (req, res, next) => {
  try {
    const { name, email, password, phone, secretKey } = req.body;

    // Secret key verification (add this to your .env file)
    const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || "admin-secret-2024";
    
    if (secretKey !== ADMIN_SECRET) {
      return res.status(403).json({
        success: false,
        message: "Invalid admin secret key",
      });
    }

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists with this email",
      });
    }

    // Create admin user
    const admin = await User.create({
      name,
      email,
      password,
      phone,
      role: "admin", // Force role to admin
    });

    // Generate token
    const token = generateToken(admin._id);

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data: {
        user: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          phone: admin.phone,
          role: admin.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all admins (admin only)
// @route   GET /api/admin/list
// @access  Private (Admin)
export const getAllAdmins = async (req, res, next) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");

    res.status(200).json({
      success: true,
      count: admins.length,
      data: admins,
    });
  } catch (error) {
    next(error);
  }
};
