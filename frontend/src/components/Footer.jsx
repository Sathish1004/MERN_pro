import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                PG
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Chennai PG Finder
              </h3>
            </div>
            <p className="text-gray-300 max-w-md text-sm leading-relaxed">
              Find your perfect paying guest accommodation in Chennai. Safe, affordable, and comfortable living spaces for students and professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform flex items-center gap-2">
                <span>🏠</span> Privacy Policy
              </button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform flex items-center gap-2">
                <span>📝</span> Terms of Service
              </button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform flex items-center gap-2">
                <span>📞</span> Contact Us
              </button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                <span>📧</span> sathishj0423@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span>📱</span> +91 98765 43210z
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>
            <span className="font-semibold">Chennai PG Finder</span> © {new Date().getFullYear()} | All rights reserved
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-white transition-colors">Privacy</button>
            <button className="hover:text-white transition-colors">Terms</button>
            <button className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;