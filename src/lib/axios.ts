import axios, { AxiosError } from "axios";

const fetcher = (cookie?: string) => {
  return typeof window === "undefined"
    ? axios.create({
        baseURL: "http://localhost:4000",
        timeout: 10000,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          Cookie: cookie,
        },
      })
    : axios.create({
        baseURL: "http://localhost:4000",
        timeout: 10000,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
};

fetcher().interceptors.response.use(
  (res) => {
    console.log("response", res.data);
    return res;
  },
  (err) => {
    if (err instanceof AxiosError) console.log("error", err.response?.data);
    return err;
  }
);

export default fetcher;
