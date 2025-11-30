
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ListingsPage = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  // High-quality real images from Unsplash
  const boysImages = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop", // Boys room
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop", // Modern interior
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop", // Study area
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop", // Bedroom
  ];

  const girlsImages = [
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop", // Girls room
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop", // Cozy interior
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop", // Well-lit room
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop", // Modern space
  ];

  const colivingImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop", // Co-living space
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop", // Common area
    "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&auto=format&fit=crop", // Workspace
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop", // Social area
  ];

  // Features for each PG type
  const pgFeatures = {
    boys: ["24/7 Security", "High-Speed WiFi", "Gym Access", "Study Room", "Food Service"],
    girls: ["Women-Only Security", "CCTV Surveillance", "Housekeeping", "Laundry", "Common Kitchen"],
    coliving: ["Community Events", "Workspaces", "Game Room", "Networking", "Flexible Leases"]
  };

  // Reusable PG card component with enhanced design
  const PGCard = ({ title, price, location, path, images, color, description, features, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide effect
    useEffect(() => {
      if (isHovered) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
      }
    }, [isHovered, images.length]);

    const getGradientClass = () => {
      switch (color) {
        case "blue": return "from-blue-500 to-blue-600";
        case "pink": return "from-pink-500 to-pink-600";
        case "purple": return "from-purple-500 to-purple-600";
        default: return "from-blue-500 to-blue-600";
      }
    };

    const getBorderClass = () => {
      switch (color) {
        case "blue": return "hover:border-blue-300";
        case "pink": return "hover:border-pink-300";
        case "purple": return "hover:border-purple-300";
        default: return "hover:border-blue-300";
      }
    };

    const getTextColor = () => {
      switch (color) {
        case "blue": return "text-blue-600";
        case "pink": return "text-pink-600";
        case "purple": return "text-purple-600";
        default: return "text-blue-600";
      }
    };

    return (
      <div
        className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 transform ${
          activeCard === index ? "scale-105 z-10" : "scale-100 hover:scale-102"
        } border-2 border-transparent ${getBorderClass()} group`}
        onMouseEnter={() => {
          setIsHovered(true);
          setActiveCard(index);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveCard(null);
        }}
      >
        {/* Premium Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-violet-400 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Comfort
          </span>
          
          
          
        </div>

        {/* Image Slider */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
              />
            ))}
          </div>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-sm font-semibold text-gray-800">Quick View</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className={`text-2xl font-bold ${getTextColor()} mb-2`}>{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">₹{price}</div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{location}</span>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate(path)}
            className={`w-full bg-gradient-to-r ${getGradientClass()} hover:shadow-xl text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg group/btn`}
          >
            <span className="flex items-center justify-center gap-2">
              Explore {title}
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
        {/* Hero Section */}
        

        {/* PG Selection Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-blue-600">Living Style</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a student, working professional, or digital nomad, 
              we have the perfect space for your needs and budget.
            </p>
          </div>

          {/* PG Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <PGCard
              index={0}
              title="Boys PG"
              price="7,500"
              location="Velachery & Multiple Locations"
              path="/pg/boys"
              images={boysImages}
              color="blue"
              description="Comfortable and secure accommodations designed for male students and professionals with all essential amenities."
              features={pgFeatures.boys}
            />
            
            <PGCard
              index={1}
              title="Girls PG"
              price="8,000"
              location="Anna Nagar & Prime Areas"
              path="/pg/girls"
              images={girlsImages}
              color="pink"
              description="Safe, elegant, and women-only spaces with premium security features and community living."
              features={pgFeatures.girls}
            />
            
            <PGCard
              index={2}
              title="Co-Living"
              price="10,000"
              location="Guindy & IT Corridors"
              path="/pg/coliving"
              images={colivingImages}
              color="purple"
              description="Modern shared living with community events, workspaces, and networking opportunities for young professionals."
              features={pgFeatures.coliving}
            />
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-blue-600">Our PGs</span>?
              </h2>
              <p className="text-xl text-gray-600">We go beyond just providing a room</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-3xl"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Security</h3>
                <p className="text-gray-600">24/7 CCTV surveillance, biometric access, and dedicated security personnel</p>
              </div>

              <div className="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5-Star Amenities</h3>
                <p className="text-gray-600">High-speed WiFi, housekeeping, laundry, gym, and recreational facilities</p>
              </div>

              <div className="text-center p-6 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-3xl"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community First</h3>
                <p className="text-gray-600">Regular events, networking opportunities, and a supportive community environment</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your New Home?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied residents who found their perfect living space with us
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book a Site Visit Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListingsPage;



