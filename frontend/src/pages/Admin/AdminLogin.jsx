import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login({ email, password });

      if (result.success) {
        // Check if user is admin
        if (result.data.user.role === "admin") {
          toast.success("Admin login successful!");
          setTimeout(() => {
            navigate("/admin/dashboard");
          }, 1500);
        } else {
          toast.error("Access denied. Admin credentials required.");
          // Logout if not admin
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      } else {
        toast.error(result.error || "Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          {/* Admin Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl mb-4">
              <svg
                className="w-10 h-10 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Admin Portal</h2>
            <p className="text-purple-100">Secure access for administrators only</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleAdminLogin} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="admin@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter admin password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Authenticating...
                  </span>
                ) : (
                  "Login to Admin Panel"
                )}
              </button>
            </form>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate("/")}
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center text-purple-100 text-sm">
            <p>🔒 This is a secure area. All activities are logged.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
