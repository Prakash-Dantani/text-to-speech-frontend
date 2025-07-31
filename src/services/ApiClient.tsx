import axios from "axios";

const ApiClient = axios.create({
  // baseURL: "http://localhost:3000/api/",
  baseURL: "https://tts-backend-ql5t.onrender.com/api/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export default ApiClient;
