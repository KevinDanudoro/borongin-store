import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://borongin.vercel.app",
  timeout: 10000,
});
export default fetcher;
