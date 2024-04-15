import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL: "https://borongin.vercel.app",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

export default fetcher;
