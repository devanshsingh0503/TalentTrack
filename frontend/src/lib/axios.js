import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  console.error("VITE_API_URL is not set! Environment variables may not be loaded properly.");
  console.error("All environment variables available:", import.meta.env);
}

console.log("Axios baseURL configured to:", apiUrl);

const axiosInstance = axios.create({
  baseURL: apiUrl || "http://localhost:3000/api",
  withCredentials: true,
});

// Log all requests for debugging
axiosInstance.interceptors.request.use(async (config) => {
  console.log(`[AXIOS] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
  
  try {
    // Check if Clerk is available and has a session
    if (window.Clerk && window.Clerk.session) {
      const token = await window.Clerk.session.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (error) {
    // Silently fail if token retrieval fails
    console.debug("Token retrieval skipped:", error?.message);
  }
  return config;
});

// Log errors for debugging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[AXIOS ERROR]", error.config?.method?.toUpperCase(), error.config?.url, error.response?.status);
    return Promise.reject(error);
  }
);

export default axiosInstance;
