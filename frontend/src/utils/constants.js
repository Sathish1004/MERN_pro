export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    REGISTER: `${API_BASE_URL}/auth/register`,
    LOGIN: `${API_BASE_URL}/auth/login`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    ME: `${API_BASE_URL}/auth/me`,
  },
  
  // PGs
  PGS: {
    BASE: `${API_BASE_URL}/pgs`,
    BY_ID: (id) => `${API_BASE_URL}/pgs/${id}`,
    MY_PGS: `${API_BASE_URL}/pgs/owner/me`,
  },
  
  // Bookings
  BOOKINGS: {
    BASE: `${API_BASE_URL}/bookings`,
    BY_ID: (id) => `${API_BASE_URL}/bookings/${id}`,
    USER: `${API_BASE_URL}/bookings/user`,
    BY_PG: (pgId) => `${API_BASE_URL}/bookings/pg/${pgId}`,
  },
  
  // Reviews
  REVIEWS: {
    BASE: `${API_BASE_URL}/reviews`,
    BY_ID: (id) => `${API_BASE_URL}/reviews/${id}`,
    BY_PG: (pgId) => `${API_BASE_URL}/reviews/pg/${pgId}`,
  },
  
  // Upload
  UPLOAD: {
    SINGLE: `${API_BASE_URL}/upload/single`,
    MULTIPLE: `${API_BASE_URL}/upload/multiple`,
  },
};
