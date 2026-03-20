import axios from "axios";

const api = axios.create({
  baseURL: "http://16.176.2.233:5000/api" // 👈 IMPORTANT
});

export default api;