import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  useEffect(() => {
    if (!user || user.role !== "admin") {
      toast.error("Access denied. Admin only.");
      navigate("/");
      return;
    }
    fetchDashboardData();
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/dashboard/admin");
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
    toast.success("Admin logged out successfully!");
    setTimeout(() => navigate("/"), 1000);
  };

  if (!user || user.role !== "admin") return null;

  const stats = dashboardData?.stats || {
    totalPGs: 0,
    totalUsers: 0,
    totalBookings: 0,
    totalRevenue: 0,
  };

  const recentBookings = dashboardData?.recentBookings || [];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex min-h-screen bg-gray-50 pt-16">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg fixed left-0 top-16 bottom-0">
          <div className="p-6 border-b">
            <h2 className="font-bold text-xl text-gray-800">Admin</h2>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "dashboard"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveMenu("products")}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "products"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              PG & Products
            </button>

            <button
              onClick={() => setActiveMenu("orders")}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "orders"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Bookings
            </button>

            <button
              onClick={() => setActiveMenu("users")}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all ${
                activeMenu === "users"
                  ? "bg-purple-50 text-purple-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Users
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
          {activeMenu === "dashboard" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

              {/* Stats Cards */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-sm text-gray-500 mb-1">Total Bookings</p>
                    <p className="text-3xl font-bold text-gray-800">{stats.totalBookings}</p>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-sm text-gray-500 mb-1">Revenue</p>
                    <p className="text-3xl font-bold text-gray-800">₹{stats.totalRevenue}</p>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-sm text-gray-500 mb-1">PG Properties</p>
                    <p className="text-3xl font-bold text-gray-800">{stats.totalPGs}</p>
                  </div>

                  <div className="bg-white rounded-lg shadow p-6">
                    <p className="text-sm text-gray-500 mb-1">Users</p>
                    <p className="text-3xl font-bold text-gray-800">{stats.totalUsers}</p>
                  </div>
                </div>
              </div>

              {/* Recent Orders Table */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Bookings</h2>
                </div>

                {loading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                  </div>
                ) : recentBookings.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Booking ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Customer
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Paid
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentBookings.map((booking) => (
                          <tr key={booking._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              #{booking._id?.slice(-6).toUpperCase()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {booking.user?.name || "N/A"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                              ₹{booking.totalAmount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {booking.paymentStatus === "paid" ? "Yes" : "No"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {booking.status === "confirmed" ? "Yes" : "No"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {new Date(booking.createdAt).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-12 text-center text-gray-500">
                    No bookings yet
                  </div>
                )}
              </div>
            </div>
          )}

          {activeMenu === "products" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">PG Properties</h1>
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-600">PG management section coming soon...</p>
              </div>
            </div>
          )}

          {activeMenu === "orders" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">All Bookings</h1>
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-600">Bookings management section coming soon...</p>
              </div>
            </div>
          )}

          {activeMenu === "users" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Users Management</h1>
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-600">Users management section coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
