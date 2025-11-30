import api from "./api";

// Create new booking
export const createBooking = async (bookingData) => {
  const response = await api.post("/bookings", bookingData);
  return response.data;
};

// Get user's bookings
export const getUserBookings = async () => {
  const response = await api.get("/bookings/user");
  return response.data;
};

// Get single booking by ID
export const getBookingById = async (id) => {
  const response = await api.get(`/bookings/${id}`);
  return response.data;
};

// Update booking
export const updateBooking = async (id, bookingData) => {
  const response = await api.put(`/bookings/${id}`, bookingData);
  return response.data;
};

// Cancel booking
export const cancelBooking = async (id) => {
  const response = await api.delete(`/bookings/${id}`);
  return response;
};

// Get bookings for a PG (owner/admin)
export const getPGBookings = async (pgId) => {
  const response = await api.get(`/bookings/pg/${pgId}`);
  return response.data;
};
