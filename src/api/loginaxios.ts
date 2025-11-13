import axios from "axios";

const apiUrl = "http://localhost:3004";
const axiosInstance = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
