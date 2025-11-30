
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// PG Details data (same as in BookingPage)
const pgDetails = {
  1: { 
    name: "Elite Men's Stay", 
    location: "Velachery", 
    price: 7500,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Laundry"],
    rating: 4.5
  },
  2: { 
    name: "Royal Boys PG", 
    location: "Tambaram", 
    price: 6800,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
    amenities: ["WiFi", "Food", "Parking"],
    rating: 4.2
  },
  3: { 
    name: "Comfort Stay", 
    location: "Guindy", 
    price: 8200,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Gym", "Laundry"],
    rating: 4.7
  },
  4: { 
    name: "Urban Nest PG", 
    location: "T Nagar", 
    price: 9000,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Pool", "Gym"],
    rating: 4.8
  },
  5: { 
    name: "Blue Haven Men's Stay", 
    location: "Adyar", 
    price: 8500,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Laundry"],
    rating: 4.4
  },
  6: { 
    name: "Prime Comfort PG", 
    location: "OMR - Thoraipakkam", 
    price: 9200,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Pool", "Gym", "Parking"],
    rating: 4.9
  },
};

// Function to store review in localStorage
const storeReview = (reviewData) => {
  const existingReviews = JSON.parse(localStorage.getItem('pgReviews') || '[]');
  const newReview = {
    id: Date.now(),
    ...reviewData,
    submittedAt: new Date().toISOString(),
    status: 'published'
  };
  existingReviews.push(newReview);
  localStorage.setItem('pgReviews', JSON.stringify(existingReviews));
  return newReview;
};

const WriteReviewPage = () => {
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(null);

  const pg = pgDetails[id];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rating: "",
    accommodationType: "",
    stayDuration: "",
    reviewTitle: "",
    reviewMessage: "",
    pros: "",
    cons: "",
    wouldRecommend: true,
    foodQuality: "",
    staffBehavior: "",
    cleanliness: "",
    safety: ""
  });

  // Update fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewPayload = {
      pgId: id,
      pgName: pg?.name,
      pgLocation: pg?.location,
      ...formData,
    };

    // Store in localStorage
    const savedReview = storeReview(reviewPayload);
    setSubmittedReview(savedReview);
    setIsSubmitted(true);

    console.log("Review Submitted:", reviewPayload);
  };

  // Star Rating Component
  const StarRating = ({ rating, onChange }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} transition duration-200`}
          >
            ⭐
          </button>
        ))}
      </div>
    );
  };

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-12">
              <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Review Submitted Successfully! 🎉</h1>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for sharing your experience about <span className="font-bold text-blue-600">{pg?.name}</span>
              </p>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto mb-8">
                <h3 className="text-lg font-semibold mb-4">Your Review Summary</h3>
                <div className="space-y-2 text-left">
                  <p><span className="font-medium">Rating:</span> {submittedReview?.rating}/5 ⭐</p>
                  <p><span className="font-medium">Accommodation:</span> {submittedReview?.accommodationType}</p>
                  <p><span className="font-medium">Stay Duration:</span> {submittedReview?.stayDuration}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold"
                >
                  View in Dashboard
                </button>
                <button
                  onClick={() => window.location.href = `/pg/${id}`}
                  className="bg-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-700 transition duration-200 font-semibold"
                >
                  Back to PG Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Share Your Experience</h1>
            <p className="text-xl text-gray-600">Help others by sharing your honest review</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PG Details Sidebar */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative">
                <img 
                  src={pg?.image} 
                  alt={pg?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                  ₹{pg?.price}/month
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{pg?.name}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {pg?.location}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    {pg?.rating}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Overall Rating</span>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {pg?.amenities.map((amenity, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review Guidelines */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Review Guidelines</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Be honest and specific about your experience</li>
                    <li>• Mention both positives and areas for improvement</li>
                    <li>• Your review will help future tenants</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Review Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Write Your Review</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Stay Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Accommodation Type *
                    </label>
                    <select
                      name="accommodationType"
                      value={formData.accommodationType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Single Sharing">Single Sharing</option>
                      <option value="Double Sharing">Double Sharing</option>
                      <option value="Triple Sharing">Triple Sharing</option>
                      <option value="Four Sharing">Four Sharing</option>
                      <option value="Luxury Room">Luxury Room</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stay Duration *
                    </label>
                    <select
                      name="stayDuration"
                      value={formData.stayDuration}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      required
                    >
                      <option value="">Select Duration</option>
                      <option value="Less than 1 month">Less than 1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="More than 1 year">More than 1 year</option>
                    </select>
                  </div>
                </div>

                {/* Overall Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overall Rating *
                  </label>
                  <StarRating 
                    rating={parseInt(formData.rating) || 0} 
                    onChange={(rating) => setFormData({...formData, rating: rating.toString()})}
                  />
                  <input type="hidden" name="rating" value={formData.rating} required />
                </div>

                {/* Detailed Ratings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Food Quality
                    </label>
                    <select
                      name="foodQuality"
                      value={formData.foodQuality}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    >
                      <option value="">Rate Food Quality</option>
                      <option value="5">Excellent ⭐⭐⭐⭐⭐</option>
                      <option value="4">Very Good ⭐⭐⭐⭐</option>
                      <option value="3">Good ⭐⭐⭐</option>
                      <option value="2">Average ⭐⭐</option>
                      <option value="1">Poor ⭐</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Staff Behavior
                    </label>
                    <select
                      name="staffBehavior"
                      value={formData.staffBehavior}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    >
                      <option value="">Rate Staff Behavior</option>
                      <option value="5">Excellent ⭐⭐⭐⭐⭐</option>
                      <option value="4">Very Good ⭐⭐⭐⭐</option>
                      <option value="3">Good ⭐⭐⭐</option>
                      <option value="2">Average ⭐⭐</option>
                      <option value="1">Poor ⭐</option>
                    </select>
                  </div>
                </div>

                {/* Review Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Review Title *
                  </label>
                  <input
                    type="text"
                    name="reviewTitle"
                    placeholder="Summarize your experience in few words"
                    value={formData.reviewTitle}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Review *
                  </label>
                  <textarea
                    name="reviewMessage"
                    placeholder="Share your detailed experience... What did you like? What could be improved?"
                    value={formData.reviewMessage}
                    onChange={handleChange}
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    required
                  />
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What you liked (Pros)
                    </label>
                    <textarea
                      name="pros"
                      placeholder="Separate with commas. Example: Clean rooms, Good food, Friendly staff"
                      value={formData.pros}
                      onChange={handleChange}
                      className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Areas for improvement (Cons)
                    </label>
                    <textarea
                      name="cons"
                      placeholder="Separate with commas. Example: Poor WiFi, Small rooms, No parking"
                      value={formData.cons}
                      onChange={handleChange}
                      className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    />
                  </div>
                </div>

                {/* Recommendation */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="wouldRecommend"
                    checked={formData.wouldRecommend}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    I would recommend this PG to others
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition duration-200 shadow-lg"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteReviewPage;