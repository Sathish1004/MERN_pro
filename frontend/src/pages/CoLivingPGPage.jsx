import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const CoLivingPGPage = () => {
  const navigate = useNavigate();
  const coLivingPGs = [
    {
      id: 1,
      name: "Urban Hive Co-Living",
      location: "Guindy",
      price: 10000,
      rating: "4.8",
      amenities: ["WiFi", "AC", "Gym", "Pool", "Events"],
      distance: "Tech Corridor",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      gender: "both"
    },
    {
      id: 2,
      name: "Metro Living Spaces",
      location: "OMR",
      price: 12500,
      rating: "4.9",
      amenities: ["WiFi", "AC", "Workspace", "Cafeteria", "Gym"],
      distance: "IT Hub",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      gender: "both"
    },
    {
      id: 3,
      name: "Community Living",
      location: "Velachery",
      price: 11000,
      rating: "4.7",
      amenities: ["WiFi", "AC", "Gym", "Laundry", "Events", "Security"],
      distance: "Near Metro",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      gender: "both"
    },
    {
      id: 4,
      name: "Tech Hub Co-Living",
      location: "Sholinganallur",
      price: 13500,
      rating: "4.9",
      amenities: ["WiFi", "AC", "Workspace", "Gym", "Pool", "Cafeteria"],
      distance: "IT Park",
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800",
      gender: "both"
    },
    {
      id: 5,
      name: "Creative Spaces",
      location: "Porur",
      price: 9500,
      rating: "4.6",
      amenities: ["WiFi", "AC", "Workspace", "Events", "Laundry"],
      distance: "Industrial Area",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
      gender: "both"
    },
    {
      id: 6,
      name: "Metro Co-Live",
      location: "Koyambedu",
      price: 10500,
      rating: "4.7",
      amenities: ["WiFi", "AC", "Gym", "Security", "Food", "Events"],
      distance: "City Center",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
      gender: "both"
    }
  ];

  // Button handlers
  const handleBookReview = (pgName,) => {
    alert(`Booking review for ${pgName}`);
    // Navigate to book review page or open modal
  };

  const handleBuyReview = (pgName, ) => {
    alert(`Buying review for ${pgName}`);
    // Navigate to buy review page
  };

  const handleViewPG = (pgId) => {
    // Navigate to PG details page
    alert(`Viewing PG details for ID: ${pgId}`);
  };

  const handleBooking = (pg) => {
    // Navigate to booking page and pass PG via state
    navigate(`/booking/${pg.id}`, { state: { pg, source: "coliving" } });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Co-Living <span className="text-purple-600">Spaces</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern shared living spaces with community events, premium amenities, and flexible options
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900">Premium Amenities</h3>
              <p className="text-sm text-gray-600">Gym, Pool, Workspaces & more</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl"></span>
              </div>
              <h3 className="font-semibold text-gray-900">Community Events</h3>
              <p className="text-sm text-gray-600">Networking & social activities</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl"></span>
              </div>
              <h3 className="font-semibold text-gray-900">Flexible Terms</h3>
              <p className="text-sm text-gray-600">Short & long stay options</p>
            </div>
          </div>

          {/* PG Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coLivingPGs.map((pg) => (
              <div 
                key={pg.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pg.image} 
                    alt={pg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm bg-white/90">
                      {pg.rating}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm bg-white/90">
                       Premium
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* PG Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
                      {pg.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{pg.location}</span>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">{pg.distance}</p>
                  </div>

                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {pg.amenities.slice(0, 3).map((amenity, idx) => (
                        <span 
                          key={idx}
                          className="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-md font-medium border border-purple-100"
                        >
                          {amenity}
                        </span>
                      ))}
                      {pg.amenities.length > 3 && (
                        <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-md font-medium border border-gray-200">
                          +{pg.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-purple-600">₹{pg.price}/month</p>
                    <p className="text-xs text-gray-500">All inclusive</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {/* Book Room */}
                    <button
                      onClick={() => handleBooking(pg)}
                      className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
                    >
                      Book Room
                    </button>

                    {/* View Images */}
                    <button
                      onClick={() => handleViewPG(pg.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
                    >
                      View Images
                    </button>

                    {/* Write Review */}
                    <button
                      onClick={() => handleBookReview(pg.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
                    >
                      Write Review
                      <span className="block text-xs opacity-90 mt-1">
                        (give rating & feedback)
                      </span>
                    </button>

                    {/* Read Reviews */}
                    <button
                      onClick={() => handleBuyReview(pg.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
                    >
                      Read Reviews
                      <span className="block text-xs opacity-90 mt-1">
                        (already booked users)
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">Ready to Join Our Community?</h3>
              <p className="text-purple-100 mb-6">Schedule a visit and experience the co-living lifestyle</p>
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Book a Tour Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoLivingPGPage;