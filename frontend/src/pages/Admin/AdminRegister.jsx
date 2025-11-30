import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    secretKey: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (formData.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    if (!formData.secretKey) {
      toast.error("Admin secret key is required!");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/admin/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        secretKey: formData.secretKey,
      });

      if (response.success) {
        toast.success("Admin registered successfully!");
        setTimeout(() => {
          navigate("/admin/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message || "Registration failed. Check your secret key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          {/* Header */}
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Admin Registration</h2>
            <p className="text-purple-100">Create a new admin account</p>
          </div>

          {/* Registration Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="admin@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit phone number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password (min 6 characters)"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  minLength="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Admin Secret Key 🔑
                </label>
                <input
                  type="password"
                  name="secretKey"
                  placeholder="Enter admin secret key"
                  required
                  value={formData.secretKey}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-red-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-red-50"
                />
                <p className="text-xs text-red-600 mt-1">
                  ⚠️ This key is required to create admin accounts
                </p>
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
                    Creating Admin Account...
                  </span>
                ) : (
                  "Create Admin Account"
                )}
              </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-center space-y-2">
              <button
                onClick={() => navigate("/admin/login")}
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                Already have an admin account? Login
              </button>
              <br />
              <button
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </div>

          {/* Info Notice */}
          <div className="mt-6 text-center text-purple-100 text-sm bg-purple-800 bg-opacity-30 rounded-xl p-4">
            <p className="font-semibold mb-1">🔒 Secure Admin Registration</p>
            <p>Contact system administrator for the secret key</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
