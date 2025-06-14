// lib/axios.js
import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001"
  : "https://realtime-back.onrender.com";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // нужно для передачи куки, если используешь cookie
});

// Добавь интерцептор
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
