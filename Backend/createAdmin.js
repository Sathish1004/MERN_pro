import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

// Admin details - CHANGE THESE!
const adminData = {
  name: "Admin User",
  email: "admin@pgrental.com",
  password: "admin123456", // Will be hashed automatically
  phone: "9999999999",
  role: "admin",
};

const createAdmin = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log("❌ Admin with this email already exists!");
      process.exit(1);
    }

    // Create admin
    const admin = await User.create(adminData);
    console.log("✅ Admin created successfully!");
    console.log("📧 Email:", admin.email);
    console.log("👤 Name:", admin.name);
    console.log("🔑 Role:", admin.role);
    console.log("\n🎉 You can now login at /admin/login");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

createAdmin();
