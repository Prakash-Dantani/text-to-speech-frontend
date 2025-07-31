import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://tts-backend-ql5t.onrender.com/api/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export default ApiClient;
