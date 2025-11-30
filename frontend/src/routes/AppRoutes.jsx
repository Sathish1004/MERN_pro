import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Main Pages
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PostPGPage from "../pages/PostPGPages";
import ListingPage from "../pages/ListingPage";
import BoysPGPage from "../pages/BoysPGPage";
import GirlsPGPage from "../pages/GirlsPGPage";
import CoLivingPGPage from "../pages/CoLivingPGPage";

// Auth Pages
import AuthPage from "../pages/User/AuthPage";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminRegister from "../pages/Admin/AdminRegister";
import DashboardPage from "../pages/DashboardPage";
import AdminDashboard from "../pages/Admin/AdminDashboard";

// Booking & Reviews
import BookingPage from "../pages/Booking/BookingPage";
import WriteReviewPage from "../pages/Reviews/writeReviewPage";
import ViewImagesPage from "../pages/ViewImages/ViewImagesPage";

// Hooks
import { useAuth } from "../hooks/useAuth";
import ReadReviewsPage from "../pages/Reviews/ReadReviewPage";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/user/auth" />;
  return children;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user || user.role !== "admin") return <Navigate to="/admin/login" />;
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/listing" element={<ListingPage />} />
      <Route path="/pg/boys" element={<BoysPGPage />} />
      <Route path="/pg/girls" element={<GirlsPGPage />} />
      <Route path="/pg/coliving" element={<CoLivingPGPage />} />
      
      {/* Auth Routes */}
      <Route path="/user/auth" element={<AuthPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />

      {/* Protected Routes */}
      <Route path="/post" element={<ProtectedRoute><PostPGPage /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/booking/:id" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
      <Route path="/review/:id" element={<ProtectedRoute><WriteReviewPage /></ProtectedRoute>} />
      <Route path="/reviews/:id" element={<ReadReviewsPage />} />
      <Route path="/images/:id" element={<ViewImagesPage />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
    </Routes>
  );
};

export default AppRoutes;
