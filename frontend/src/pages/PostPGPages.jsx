import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PostPGPage = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">+</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent">
              List Your PG
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach thousands of students and professionals looking for PG accommodations in Chennai
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
          <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center text-4xl mb-6 mx-auto">
            🚀
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Feature Coming Soon!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're working hard to bring you the best PG listing experience. Soon you'll be able to 
            list your PG with detailed information, photos, and manage bookings seamlessly.
          </p>

          {/* Progress Section */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Development Progress</span>
              <span>65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>

          {/* Notify Me Form */}
          <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-gray-800 mb-4">Get Notified When We Launch</h3>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold">
                Notify Me
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-xl mb-3 mx-auto">
                📸
              </div>
              <h4 className="font-semibold text-gray-800">Photo Gallery</h4>
              <p className="text-sm text-gray-600 mt-2">Showcase your PG with multiple photos</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-xl mb-3 mx-auto">
                📊
              </div>
              <h4 className="font-semibold text-gray-800">Analytics</h4>
              <p className="text-sm text-gray-600 mt-2">Track views and inquiries</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 text-xl mb-3 mx-auto">
                💬
              </div>
              <h4 className="font-semibold text-gray-800">Direct Chat</h4>
              <p className="text-sm text-gray-600 mt-2">Communicate directly with potential tenants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default PostPGPage;