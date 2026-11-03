import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (typeof document !== "undefined") {
    const token = Cookies.get("X-Access-Token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      Cookies.remove("X-Access-Token");
      if (
        currentPath !== "/access" &&
        currentPath !== "/login" &&
        currentPath !== "/register" &&
        currentPath !== "/" &&
        currentPath !== "/corporate"
      ) {
        window.location.href = "/access";
      }
    }
    return Promise.reject(error);
  }
);
