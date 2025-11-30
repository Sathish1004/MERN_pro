// import { useParams, useLocation } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { useState, useEffect } from "react";
// import api from "../../services/api";

// const ReadReviewsPage = () => {
//   const { id } = useParams();
//   const location = useLocation();

//   const pgDetails = {
//     1: {
//       name: "Elite Men's Stay",
//       location: "Velachery",
//       price: 7500,
//       image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600",
//       amenities: ["WiFi", "AC", "Food"],
//       rating: 4.3
//     }
//   };
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const pgFromState = location.state?.pg;
//   const pg = pgFromState || pgDetails[id];

//   useEffect(() => {
//     let isMounted = true;
//     const fetchReviews = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         // Expecting backend to support filtering by pg id
//         const res = await api.get(`/reviews?pg=${id}`);
//         const data = Array.isArray(res?.data) ? res.data : res?.data?.reviews;
//         if (isMounted) setReviews(data || []);
//       } catch (e) {
//         if (isMounted) {
//           setError("Failed to load reviews. Please try again later.");
//           setReviews([]);
//         }
//       } finally {
//         if (isMounted) setLoading(false);
//       }
//     };
//     if (id) fetchReviews();
//     return () => { isMounted = false; };
//   }, [id]);

//   if (!pg) {
//     return (
//       <>
//         <Navbar />
//         <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow">
//           <p className="text-gray-700">PG not found. Please check the link.</p>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-4xl mx-auto p-4 mt-6">
//         <h1 className="text-2xl font-bold mb-4">PG Reviews</h1>
//         {/* PG Info */}
//         <div className="bg-white shadow p-4 rounded-xl mb-6">
//           <img src={pg.image} className="w-full h-60 object-cover rounded-xl" />
//           <h1 className="text-3xl font-bold mt-3">{pg.name}</h1>
//           <p className="text-gray-600">{pg.location}</p>
//           <p className="text-blue-600 font-bold mt-2">₹{pg.price}/month</p>
//           <div className="flex items-center gap-3 mt-2">
//             <span className="text-yellow-500 font-semibold">{pg.rating} ⭐</span>
//             <span className="text-gray-500">Overall Rating</span>
//           </div>
//           {pg.amenities?.length > 0 && (
//             <div className="mt-3">
//               <p className="font-semibold mb-2">Amenities</p>
//               <div className="flex flex-wrap gap-2">
//                 {pg.amenities.map((a) => (
//                   <span key={a} className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-200">
//                     {a}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mb-6 text-sm text-gray-600">Viewing resident reviews for this PG.</div>

//         {loading && (
//           <div className="bg-white rounded-xl shadow p-4 text-gray-600">Loading reviews...</div>
//         )}
//         {!!error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-4">{error}</div>
//         )}

//         {/* Reviews */}
//         <h2 className="text-xl font-semibold mb-3">Resident Reviews</h2>
//         {(!loading && reviews.length === 0) ? (
//           <div className="bg-white p-4 shadow rounded-xl text-gray-600">No reviews yet.</div>
//         ) : (
//           <div className="space-y-4">
//             {reviews.map((r) => (
//               <div key={r.id || r._id} className="bg-white p-4 shadow rounded-xl">
//                 <div className="flex justify-between">
//                   <h3 className="font-semibold">{r.user || r.authorName || "Anonymous"}</h3>
//                   <span>{r.rating} ⭐</span>
//                 </div>
//                 <p className="text-gray-700 mt-1">{r.text || r.comment}</p>
//                 <p className="text-gray-400 text-sm">{r.date || (r.createdAt ? new Date(r.createdAt).toLocaleDateString() : "")}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ReadReviewsPage;



import { useParams, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import api from "../../services/api";

const ReadReviewsPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const pgDetails = {
    1: {
      name: "Elite Men's Stay",
      location: "Velachery, Chennai",
      price: 7500,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600",
      amenities: ["WiFi", "AC", "Food", "Laundry", "Security", "Power Backup"],
      rating: 4.3,
      totalReviews: 24,
      description: "A comfortable and secure PG accommodation for working professionals and students with all modern amenities."
    }
  };

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const pgFromState = location.state?.pg;
  const pg = pgFromState || pgDetails[id];

  // Sample reviews data (in real app, this would come from API)
  const sampleReviews = [
    {
      id: 1,
      user: "Rahul Sharma",
      rating: 4.5,
      text: "Stayed here for 2 years during my college. Great food and friendly staff. The rooms are well-maintained and the location is perfect for students.",
      date: "2024-01-15",
      stayDuration: "2 years",
      verified: true
    },
    {
      id: 2,
      user: "Priya Patel",
      rating: 4.0,
      text: "Good PG for working professionals. The WiFi is reliable and the food quality is decent. Security is good with CCTV cameras.",
      date: "2024-02-20",
      stayDuration: "1 year",
      verified: true
    },
    {
      id: 3,
      user: "Amit Kumar",
      rating: 3.5,
      text: "Average experience. Rooms are a bit small but manageable. The location is convenient with metro station nearby.",
      date: "2024-03-10",
      stayDuration: "6 months",
      verified: true
    },
    {
      id: 4,
      user: "Sneha Reddy",
      rating: 5.0,
      text: "Excellent PG! The staff is very helpful and the food is homely. Made many friends here. Highly recommended!",
      date: "2024-03-25",
      stayDuration: "1.5 years",
      verified: true
    }
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchReviews = async () => {
      setLoading(true);
      setError("");
      try {
        // In real app, use API call
        // const res = await api.get(`/reviews?pg=${id}`);
        // const data = Array.isArray(res?.data) ? res.data : res?.data?.reviews;
        
        // For demo, using sample data
        setTimeout(() => {
          if (isMounted) {
            setReviews(sampleReviews);
          }
        }, 1000);
      } catch (e) {
        if (isMounted) {
          setError("Failed to load reviews. Please try again later.");
          setReviews([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    if (id) fetchReviews();
    return () => { isMounted = false; };
  }, [id]);

  // Filter reviews by rating
  const filteredReviews = reviews.filter(review => {
    if (activeFilter === "all") return true;
    if (activeFilter === "5star") return review.rating >= 4.5;
    if (activeFilter === "4star") return review.rating >= 4.0 && review.rating < 4.5;
    if (activeFilter === "3star") return review.rating >= 3.0 && review.rating < 4.0;
    return true;
  });

  // Calculate rating statistics
  const ratingStats = {
    total: reviews.length,
    average: reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length || 0,
    distribution: [5,4,3,2,1].map(star => ({
      star,
      count: reviews.filter(r => Math.floor(r.rating) === star).length,
      percentage: (reviews.filter(r => Math.floor(r.rating) === star).length / reviews.length) * 100
    }))
  };

  if (!pg) {
    return (
      <>
        <Navbar />
        <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow">
          <p className="text-gray-700">PG not found. Please check the link.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-4 mt-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{pg.name}</h1>
              <p className="text-xl mb-2">📍 {pg.location}</p>
              <p className="text-2xl font-bold mb-4">₹{pg.price}/month</p>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-yellow-300 font-bold text-lg">{pg.rating} ⭐</span>
                  <span className="ml-2">Overall Rating</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-bold text-lg">{reviews.length}</span>
                  <span className="ml-2">Reviews</span>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-6 md:mt-0 flex justify-center">
              <img 
                src={pg.image} 
                className="w-full max-w-md h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                alt={pg.name}
              />
            </div>
          </div>
        </div>

        {/* PG Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About this PG</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {pg.description || "A well-maintained PG accommodation offering comfortable living spaces with all essential amenities for students and working professionals."}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {pg.amenities?.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-gray-700">Average Rating</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full font-bold">
                  {ratingStats.average.toFixed(1)} ⭐
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">Total Reviews</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold">
                  {ratingStats.total}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-gray-700">Price Range</span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full font-bold">
                  ₹{pg.price}
                </span>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-gray-800">Rating Distribution</h4>
              <div className="space-y-2">
                {ratingStats.distribution.map(({star, count, percentage}) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="w-8 text-sm text-gray-600">{star}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-sm text-gray-600">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                What Residents Say
              </h2>
              <p className="text-gray-600">
                Real experiences from people who stayed here
              </p>
            </div>
            
            {/* Review Filters */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === "all" 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Reviews ({reviews.length})
              </button>
              <button
                onClick={() => setActiveFilter("5star")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === "5star" 
                    ? "bg-green-600 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                5★ ({reviews.filter(r => r.rating >= 4.5).length})
              </button>
              <button
                onClick={() => setActiveFilter("4star")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === "4star" 
                    ? "bg-blue-500 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                4★ ({reviews.filter(r => r.rating >= 4.0 && r.rating < 4.5).length})
              </button>
              <button
                onClick={() => setActiveFilter("3star")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === "3star" 
                    ? "bg-yellow-500 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                3★ ({reviews.filter(r => r.rating >= 3.0 && r.rating < 4.0).length})
              </button>
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">ℹ</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">
                  Real Experiences from Previous Residents
                </h4>
                <p className="text-blue-700 text-sm">
                  These reviews are from people who actually stayed in this PG. Read their experiences about food quality, 
                  room conditions, staff behavior, and overall living experience to make an informed decision.
                </p>
              </div>
            </div>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="text-gray-600 mt-2">Loading reviews from previous residents...</p>
            </div>
          )}

          {!!error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-4">
              {error}
            </div>
          )}

          {/* Reviews Grid */}
          {(!loading && filteredReviews.length === 0) ? (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Reviews Yet</h3>
              <p className="text-gray-600">Be the first to share your experience about this PG!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReviews.map((review) => (
                <div 
                  key={review.id || review._id} 
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  {/* Review Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-800">{review.user || "Anonymous"}</h3>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <span>✓</span> Verified Stay
                          </span>
                        )}
                      </div>
                      {review.stayDuration && (
                        <p className="text-sm text-gray-500">Stayed for {review.stayDuration}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm">
                        {review.rating} ⭐
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {review.date || (review.createdAt ? new Date(review.createdAt).toLocaleDateString() : "")}
                      </p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-700 leading-relaxed">{review.text || review.comment}</p>

                  {/* Review Highlights */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {review.rating >= 4 && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Recommended</span>
                      )}
                      {review.stayDuration && review.stayDuration.includes("year") && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Long-term Stay</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 text-center border border-green-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ready to Experience This PG?
            </h3>
            <p className="text-gray-600 mb-4">
              Based on {reviews.length} reviews from previous residents, this PG has an average rating of {ratingStats.average.toFixed(1)} stars.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book a Visit Now
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ReadReviewsPage;