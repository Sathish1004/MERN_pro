import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [activeMenu, setActiveMenu] = useState("orders");

  useEffect(() => {
    if (!user) {
      navigate("/user/auth");
      return;
    }
    fetchDashboardData();
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/dashboard/user");
      if (response.success) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully!");
    setTimeout(() => navigate("/"), 1000);
  };

  if (!user) return null;

  const bookings = dashboardData?.bookings || [];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="flex min-h-screen bg-gray-50 pt-16">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg fixed left-0 top-16 bottom-0 overflow-y-auto">
          {/* User Profile Section */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <p className="text-xs text-gray-500">+91 {user.phone}</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <button
              onClick={() => setActiveMenu("orders")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "orders"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>My Bookings</span>
            </button>

            <button
              onClick={() => setActiveMenu("support")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "support"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Customer Support</span>
            </button>

            <button
              onClick={() => setActiveMenu("reviews")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "reviews"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>My Reviews</span>
            </button>

            <button
              onClick={() => setActiveMenu("addresses")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "addresses"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Addresses</span>
            </button>

            <button
              onClick={() => setActiveMenu("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "profile"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Profile</span>
            </button>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t absolute bottom-0 left-0 right-0 bg-white">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8">
          {activeMenu === "orders" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h1>
              
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                </div>
              ) : bookings.length > 0 ? (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking._id} className="bg-white rounded-lg shadow p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">
                            Booking #{booking._id?.slice(-6).toUpperCase()}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {new Date(booking.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span
                          className={`px-4 py-1 rounded-full text-sm font-medium ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : booking.status === "completed"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>

                      <div className="border-t pt-3">
                        <p className="text-gray-700 font-medium mb-1">{booking.pg?.title}</p>
                        <p className="text-sm text-gray-600">
                          {booking.pg?.location?.city}, {booking.pg?.location?.area}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <div>
                          <p className="text-sm text-gray-500">Total Amount</p>
                          <p className="text-2xl font-bold text-gray-800">₹{booking.totalAmount}</p>
                        </div>
                        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                  <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookings Yet</h3>
                  <p className="text-gray-500 mb-6">Start exploring PGs and make your first booking!</p>
                  <button
                    onClick={() => navigate("/listing")}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Browse PGs
                  </button>
                </div>
              )}
            </div>
          )}

          {activeMenu === "support" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Support</h1>
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-600">Support section coming soon...</p>
              </div>
            </div>
          )}

          {activeMenu === "reviews" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">My Reviews</h1>
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-600">Reviews section coming soon...</p>
              </div>
            </div>
          )}

          {activeMenu === "addresses" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">My Addresses</h1>
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-600">Addresses section coming soon...</p>
              </div>
            </div>
          )}

          {activeMenu === "profile" && (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
              <div className="bg-white rounded-lg shadow p-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <p className="text-gray-900 font-medium">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <p className="text-gray-900">+91 {user.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <p className="text-gray-900 capitalize">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
