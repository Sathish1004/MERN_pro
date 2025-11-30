import React, { createContext, useState, useEffect } from "react";
import * as authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    const initAuth = () => {
      const storedUser = authService.getStoredUser();
      const token = localStorage.getItem("token");

      if (storedUser && token) {
        setUser(storedUser);
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Register function
  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      if (response.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        return { success: true, data: response.data };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      if (response.success) {
        setUser(response.data.user);
        setIsAuthenticated(true);
        return { success: true, data: response.data };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  };




  // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjZmMTkzOWZjZTUzZjZhMzIxNzg1YSIsImVtYWlsIjoic2F0aGlzaEBleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY0MTU5OTgzLCJleHAiOjE3NjQ3NjQ3ODN9.pwR7oHhkTYrDkE-1xC8osS1WFEa8Y6MPcs99tOVl9rg
  
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MjZmNjEwNGM3NmM5MGFlYzkyMTE0MiIsImVtYWlsIjoic2F0aGlzaDEyQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NjQxNjEwNTMsImV4cCI6MTc2NDc2NTg1M30.d12GbdqkJ2u3If01MZ_ygbmrbsEPEmy_cvoFPfLaj6M
  // // Update user data

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    register,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
