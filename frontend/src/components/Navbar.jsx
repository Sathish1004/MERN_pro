import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully!");
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const getDashboardLink = () => {
    if (!user) return null;
    return user.role === "admin" ? "/admin/dashboard" : "/dashboard";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <b className="text-black">F</b>or<b className="text-black">E</b>ver
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link to="/listing" className="hover:text-indigo-600 transition-colors">Listings</Link>
            <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>

            {/* If logged IN */}
            {isAuthenticated && user ? (
              <>
                {/* Dashboard Icon - Rounded Avatar Style */}
                <Link
                  to={getDashboardLink()}
                  className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                  title="Dashboard"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white ring-1 ring-gray-300 text-gray-800">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                      <path d="M4 20a8 8 0 1 1 16 0" />
                    </svg>
                  </span>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Single Login Button */}
                <Link
                  to="/user/auth"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-slideDown px-4 py-4">

            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3">
              Home
            </Link>
            

            <Link to="/listing" onClick={() => setIsMobileMenuOpen(false)} className="block py-3">
              Listings
            </Link>

            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-3">
              About
            </Link>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-3">
              Contact
            </Link>

            <div className="my-3 border-t"></div>

            {/* If logged in */}
            {isAuthenticated && user ? (
              <>
                <Link
                  to={getDashboardLink()}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-3"
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white ring-1 ring-gray-300 text-gray-800">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                      <path d="M4 20a8 8 0 1 1 16 0" />
                    </svg>
                  </span>
                  Dashboard
                </Link>

                <div className="py-2 text-sm text-gray-600">
                  Logged in as: <span className="font-semibold">{user.name}</span>
                </div>

                <button
                  onClick={handleLogout}
                  className="block w-full py-3 bg-red-500 text-white rounded-lg mt-2 hover:bg-red-600 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/user/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 bg-indigo-600 text-white rounded-lg text-center font-medium"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
