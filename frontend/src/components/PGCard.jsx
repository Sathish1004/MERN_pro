import React from "react";
import { useNavigate } from "react-router-dom";

// Amenity images
const amenityImages = {
  WiFi: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  AC: "https://images.unsplash.com/photo-1616627453938-5c8e52e4a9d0?w=800",
  Food: "https://images.unsplash.com/photo-1600891963933-96053a4d9f9d?w=800",
  Laundry: "https://images.unsplash.com/photo-1581579186983-9f6cc2a5dca4?w=800",
  Parking: "https://images.unsplash.com/photo-1603791452906-bb7b4d6d9a9b?w=800",
  Security: "https://images.unsplash.com/photo-1560508170-42b498f9d5a1?w=800",
  Gym: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
  Pool: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
};

const PGCard = ({ title, price, location, gender, img, amenities, id }) => {
  const navigate = useNavigate();

  // --- BUTTON HANDLERS ---
  const handleBookRoom = () => navigate(`/booking/${id}`);
  const handleViewImages = () => navigate(`/pg/${id}/images`);
  const handleBookReview = () => navigate(`/pg/${id}/write-review`);
  const handleViewReview = () => navigate(`/pg/${id}/reviews`);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative flex flex-col group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-600 mb-3 text-sm flex items-center gap-1">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </p>

        {/* Price + Gender Tag */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-indigo-600">
            ₹{price}/month
          </span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              gender === "girls"
                ? "bg-pink-50 border-pink-200 text-pink-600"
                : gender === "boys"
                ? "bg-blue-50 border-blue-200 text-blue-600"
                : "bg-green-50 border-green-200 text-green-600"
            }`}
          >
            {gender === "both"
              ? "Co-living"
              : gender.charAt(0).toUpperCase() + gender.slice(1)}
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {amenities.slice(0, 4).map((a, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 font-medium flex items-center gap-1 hover:border-indigo-300 transition"
            >
              <img
                src={amenityImages[a]}
                alt={a}
                className="w-4 h-4 rounded-full object-cover"
              />
              {a}
            </div>
          ))}
        </div>

        {/* ---- 4 BUTTONS (2 ROWS × 2 COLUMNS) ---- */}
        {/* ---- 4 BUTTONS (2×2 GRID) ---- */}
<div className="grid grid-cols-2 gap-4 mt-10">

  {/* Book Room */}
  <button
    onClick={handleBookRoom}
    className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
 
  >
    Book Room
  </button>

  {/* View Images */}
  <button
    onClick={handleViewImages}
   className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
   >
    View Images
  </button>

  {/* Write Review */}
  <button
    onClick={handleBookReview}
   className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
 
  >
    Write Review
    <span className="block text-xs font-normal mt-1 opacity-90">
      (give rating & feedback)
    </span>
  </button>

  {/* Read Reviews */}
  <button
    onClick={handleViewReview}
    className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 
               text-white py-4 rounded-2xl font-semibold shadow-md shadow-black/20 transition"
  >
    Read Reviews
    <span className="block text-xs font-normal mt-1 opacity-90">
      (already booked users)
    </span>
  </button>

</div>

      </div>

      {/* Featured Badge */}
      <div className="absolute top-4 right-4">
        <div className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Featured
        </div>
      </div>
    </div>
  );
};

export default PGCard;



