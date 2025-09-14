// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change this to your backend URL
  withCredentials: true, // only if you use cookies for auth
});

// Add auth token automatically (optional)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
