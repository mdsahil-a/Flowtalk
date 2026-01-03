import axios from "axios";

// const BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5001/api"
//     : "https://flowtalk-server-d1pd.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: "https://flowtalk-server-d1pd.onrender.com/api",
  withCredentials: true,
});

