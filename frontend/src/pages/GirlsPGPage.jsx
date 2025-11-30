import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const GirlsPGPage = () => {
  const navigate = useNavigate();
  const girlsPGs = [
    {
      id: 1,
      name: "Safe Stay Women's PG",
      location: "Anna Nagar",
      price: 8000,
      rating: "4.8",
      amenities: ["WiFi", "AC", "Security", "Food"],
      distance: "Near Shopping Mall",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
      gender: "girls"
    },
    {
      id: 2,
      name: "Pink Palace PG",
      location: "T.Nagar",
      price: 8500,
      rating: "4.9",
      amenities: ["WiFi", "AC", "CCTV", "Gym", "Laundry"],
      distance: "City Center",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      gender: "girls"
    },
    {
      id: 3,
      name: "Women's Comfort Zone",
      location: "Adyar",
      price: 9200,
      rating: "4.7",
      amenities: ["WiFi", "AC", "Food", "Laundry", "Parking"],
      distance: "Beach Nearby",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800",
      gender: "girls"
    },
    {
      id: 4,
      name: "Rose Garden PG",
      location: "Besant Nagar",
      price: 7500,
      rating: "4.6",
      amenities: ["WiFi", "Security", "Food", "Laundry"],
      distance: "Near Beach",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      gender: "girls"
    },
    {
      id: 5,
      name: "Sunrise Women's Hostel",
      location: "Nungambakkam",
      price: 8800,
      rating: "4.8",
      amenities: ["WiFi", "AC", "Gym", "Food", "Security"],
      distance: "City Center",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      gender: "girls"
    },
    {
      id: 6,
      name: "Lotus PG for Women",
      location: "Thoraipakkam",
      price: 9500,
      rating: "4.9",
      amenities: ["WiFi", "AC", "Pool", "Gym", "Security", "Food"],
      distance: "IT Corridor",
      image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800",
      gender: "girls"
    }
  ];

  // Button handlers
  const handleBookReview = (pgName,) => {
    alert(`Booking review for ${pgName}`);
    // Navigate to book review page or open modal
  };

  const handleBuyReview = (pgName,) => {
    alert(`Buying review for ${pgName}`);
    // Navigate to buy review page
  };

  const handleViewPG = (pgId) => {
    // Navigate to PG details page
    alert(`Viewing PG details for ID: ${pgId}`);
  };

  const handleBooking = (pg) => {
    // Navigate to booking page and pass PG via state so BookingPage can render it
    navigate(`/booking/${pg.id}`, { state: { pg, source: "girls" } });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Girls PG <span className="text-pink-600">Listings</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Safe and secure paying guest accommodations with premium amenities for women
            </p>
          </div>

          {/* Security Badge */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-rose-200 p-4 text-center">
              <div className="flex items-center justify-center gap-3 text-rose-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">All PGs are verified with 24/7 security and CCTV surveillance</span>
              </div>
            </div>
          </div>

          {/* PG Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {girlsPGs.map((pg) => (
              <div 
                key={pg.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-rose-100 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pg.image} 
                    alt={pg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm bg-white/90">
                       {pg.rating}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm bg-white/90">
                       Secure
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* PG Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-1">
                      {pg.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
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
                          className="bg-pink-50 text-pink-700 text-xs px-3 py-1 rounded-md font-medium border border-pink-100"
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

          {/* Contact Support */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-sm border border-rose-200 p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Assistance?</h3>
              <p className="text-gray-600 mb-4">Our women support team is available 24/7 to help you find the perfect PG</p>
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-rose-200">
                Contact Support Team
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GirlsPGPage;