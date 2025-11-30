import api from "./api";

// Get all PGs with optional filters
export const getAllPGs = async (filters = {}) => {
  const params = new URLSearchParams();
  
  if (filters.gender) params.append("gender", filters.gender);
  if (filters.area) params.append("area", filters.area);
  if (filters.minPrice) params.append("minPrice", filters.minPrice);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
  if (filters.search) params.append("search", filters.search);
  if (filters.sort) params.append("sort", filters.sort);
  
  const queryString = params.toString();
  const url = queryString ? `/pgs?${queryString}` : "/pgs";
  
  const response = await api.get(url);
  return response.data;
};

// Get single PG by ID
export const getPGById = async (id) => {
  const response = await api.get(`/pgs/${id}`);
  return response.data;
};

// Create new PG (owner/admin only)
export const createPG = async (pgData) => {
  const response = await api.post("/pgs", pgData);
  return response.data;
};

// Update PG (owner/admin only)
export const updatePG = async (id, pgData) => {
  const response = await api.put(`/pgs/${id}`, pgData);
  return response.data;
};

// Delete PG (owner/admin only)
export const deletePG = async (id) => {
  const response = await api.delete(`/pgs/${id}`);
  return response;
};

// Get my PGs (owner)
export const getMyPGs = async () => {
  const response = await api.get("/pgs/owner/me");
  return response.data;
};
