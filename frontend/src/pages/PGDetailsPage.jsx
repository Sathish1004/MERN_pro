import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const samplePG = {
  1: {
    name: "Elite Men's Stay",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    ],
    amenities: ["AC", "WiFi", "Food", "Laundry"]
  },

  2: {
    name: "Royal Boys PG",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
    ],
    amenities: ["WiFi", "Parking", "Gym", "Security"]
  }
};

const PGDetailsPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const pg = samplePG[id];

  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "images");
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");

  const handleSubmitFeedback = () => {
    if (!newFeedback.trim()) return;
    setFeedbackList([...feedbackList, newFeedback]);
    setNewFeedback("");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto pt-24 pb-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{pg.name}</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button className={`px-4 py-2 rounded-lg ${activeTab === "images" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("images")}>
            Images
          </button>

          <button className={`px-4 py-2 rounded-lg ${activeTab === "booking" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("booking")}>
            Booking
          </button>

          <button className={`px-4 py-2 rounded-lg ${activeTab === "feedback" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("feedback")}>
            Feedback
          </button>

          <button className={`px-4 py-2 rounded-lg ${activeTab === "readreviews" ? "bg-blue-600 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("readreviews")}>
            Read Reviews
          </button>
        </div>

        {/* TAB CONTENT */}
        {/* IMAGES */}
        {activeTab === "images" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">PG Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pg.images.map((img, index) => (
                <img key={index} src={img} className="rounded-xl shadow-md" alt="" />
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Amenities:</h3>
              <div className="flex gap-2 flex-wrap">
                {pg.amenities.map((a, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BOOKING */}
        {activeTab === "booking" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Book Your Room</h2>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <label className="block mb-2 font-semibold">Select Date:</label>
              <input type="date" className="border p-2 rounded w-full mb-4" />

              <label className="block mb-2 font-semibold">Select Time:</label>
              <input type="time" className="border p-2 rounded w-full mb-4" />

              <label className="block mb-2 font-semibold">Sharing Type:</label>
              <select className="border p-2 rounded w-full mb-4">
                <option>1 Sharing</option>
                <option>2 Sharing</option>
                <option>3 Sharing</option>
              </select>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* FEEDBACK */}
        {activeTab === "feedback" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Give Your Feedback</h2>

            <textarea
              className="border w-full p-3 rounded-lg"
              rows="5"
              value={newFeedback}
              onChange={(e) => setNewFeedback(e.target.value)}
              placeholder="Write your feedback..."
            ></textarea>

            <button
              onClick={handleSubmitFeedback}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Submit Feedback
            </button>
          </div>
        )}

        {/* READ REVIEWS */}
        {activeTab === "readreviews" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">User Reviews</h2>

            {feedbackList.length === 0 ? (
              <p className="text-gray-600">No reviews available yet.</p>
            ) : (
              <ul className="space-y-3">
                {feedbackList.map((review, i) => (
                  <li key={i} className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    {review}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default PGDetailsPage;
