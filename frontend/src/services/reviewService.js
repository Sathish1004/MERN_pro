import api from "./api";

// Create new review
export const createReview = async (reviewData) => {
  const response = await api.post("/reviews", reviewData);
  return response.data;
};

// Get reviews for a PG
export const getPGReviews = async (pgId) => {
  const response = await api.get(`/reviews/pg/${pgId}`);
  return response.data;
};

// Update review
export const updateReview = async (id, reviewData) => {
  const response = await api.put(`/reviews/${id}`, reviewData);
  return response.data;
};

// Delete review
export const deleteReview = async (id) => {
  const response = await api.delete(`/reviews/${id}`);
  return response;
};
