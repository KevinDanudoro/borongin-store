import axios, { AxiosError } from "axios";

const url =
  process.env.NODE_ENV === "production"
    ? "https://borongin.vercel.app"
    : "http://localhost:4000";

const fetcher = axios.create({
  baseURL: process.env.API_ENDPOINT || url,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

fetcher.interceptors.response.use(
  (res) => {
    console.log("response", "success");
    return res;
  },
  (err) => {
    if (err instanceof AxiosError) {
      console.log(err.response?.statusText);
      return err.response;
    }
    return err;
  }
);

export default fetcher;
