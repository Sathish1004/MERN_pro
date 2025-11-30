import api from "./api";

// Register new user
export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  if (response.success && response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }
  return response;
};

// Login user
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  if (response.success && response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }
  return response;
};

// Logout user
export const logout = async () => {
  try {
    await api.post("/auth/logout");
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};

// Get current user
export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// Get stored user data
export const getStoredUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
