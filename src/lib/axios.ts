import axios, { AxiosError } from "axios";

const fetcher = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});

fetcher.interceptors.response.use(
  (res) => {
    console.log("response", res.data);
    return res;
  },
  (err) => {
    if (err instanceof AxiosError) console.log("error", err.request);
    return err;
  }
);

export default fetcher;
