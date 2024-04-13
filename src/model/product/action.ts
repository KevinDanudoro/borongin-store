import z from "zod";
import fetcher from "@/lib/axios";
import { createProductSchema } from ".";

export const getAllProducts = () => fetcher.get("/product");
export const getProductById = (id: string) =>
  fetcher.get("/product", { params: { id } });
export const createProduct = (product: z.infer<typeof createProductSchema>) =>
  fetcher.post("/product", { data: product });
