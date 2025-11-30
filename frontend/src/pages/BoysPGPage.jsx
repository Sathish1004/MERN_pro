import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BoysPGPage = () => {
  const navigate = useNavigate();

  const boysPGs = [
    {
      id: 1,
      name: "Elite Men's Stay",
      location: "Velachery",
      price: 7500,
      rating: "4.5",
      amenities: ["WiFi", "AC", "Food", "Laundry"],
      distance: "2km from Metro",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      gender: "boys",
    },
    {
      id: 2,
      name: "Royal Boys PG",
      location: "Tambaram",
      price: 6800,
      rating: "4.3",
      amenities: ["WiFi", "Parking", "Gym", "Security"],
      distance: "1.5km from Station",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      gender: "boys",
    },
    {
      id: 3,
      name: "Comfort Stay",
      location: "Guindy",
      price: 8200,
      rating: "4.7",
      amenities: ["WiFi", "AC", "Food", "Parking", "Laundry"],
      distance: "Near Tech Park",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      gender: "boys",
    },
    {
      id: 4,
      name: "Urban Nest PG",
      location: "T Nagar",
      price: 9000,
      rating: "4.8",
      amenities: ["AC", "WiFi", "Housekeeping", "TV Lounge", "Gym"],
      distance: "1km from Bus Stand",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      gender: "boys",
    },
    {
      id: 5,
      name: "Blue Haven Men's Stay",
      location: "Adyar",
      price: 8500,
      rating: "4.6",
      amenities: ["WiFi", "Laundry", "Parking", "Security"],
      distance: "Near IIT Madras",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      gender: "boys",
    },
    {
      id: 6,
      name: "Prime Comfort PG",
      location: "OMR - Thoraipakkam",
      price: 9200,
      rating: "4.9",
      amenities: ["WiFi", "AC", "Gym", "Food", "Pool"],
      distance: "Close to IT Park",
      image:
        "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800",
      gender: "boys",
    },
  ];

  // ⭐ UPDATED NAVIGATION ROUTES ⭐
  const handleViewPG = (id) => navigate(`/images/${id}`);
  const handleBooking = (id) => navigate(`/booking/${id}`);
  const handleBookReview = (id) => navigate(`/review/${id}`);
  const handleBuyReview = (id) => navigate(`/review/${id}`);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
              Boys PG <span className="text-blue-600">Listings</span>
            </h1>
            <p className="text-lg text-gray-600">
              Affordable, Safe & Comfortable PG stays for men across Chennai.
            </p>
          </div>

          {/* PG Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boysPGs.map((pg) => (
              <div
                key={pg.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border border-blue-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pg.image}
                    alt={pg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                    {pg.name}
                  </h3>

                  <div className="text-sm text-gray-600">{pg.location}</div>
                  <p className="text-xs text-gray-500">{pg.distance}</p>

                  {/* Amenities */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pg.amenities.slice(0, 3).map((a, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-md"
                      >
                        {a}
                      </span>
                    ))}
                    {pg.amenities.length > 3 && (
                      <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-md">
                        +{pg.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="my-4">
                    <p className="text-2xl font-bold text-blue-600">
                      ₹{pg.price}/month
                    </p>
                    <p className="text-xs text-gray-500">
                      Inclusive of charges
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {/* Book Room */}
                    <button
                      onClick={() => handleBooking(pg.id)}
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

          {/* Support Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
              Get Personalized Assistance
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoysPGPage;
