import z from "zod";
import fetcher from "@/lib/axios";
import { createProductSchema } from ".";

export const getAllProducts = (cookie?: string) =>
  fetcher(cookie).get("/product");
export const getProductById = (id: string, cookie?: string) =>
  fetcher(cookie).get("/product", { params: { id } });
export const createProduct = (
  product: z.infer<typeof createProductSchema>,
  cookie?: string
) => fetcher(cookie).post("/product", { data: product });
