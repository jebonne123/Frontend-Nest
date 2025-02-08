import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-nest-brown.vercel.app/posts", withCredentials: false  // Backend API
});

export default api;
