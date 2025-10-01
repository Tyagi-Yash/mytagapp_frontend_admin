import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://15.206.16.230:4003/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       // Handle Unauthorized (401)
//       if (error.response.status === 401) {
//         console.warn("Unauthorized - maybe token expired.");
//         localStorage.removeItem("token");
//         window.location.href = "/login"; // force logout
//       }

//       // Handle Forbidden (403)
//       if (error.response.status === 403) {
//         console.error("Forbidden - You don't have permission.");
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
