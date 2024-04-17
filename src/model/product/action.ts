import z from "zod";
import fetcher from "@/lib/axios";
import { createProductSchema } from ".";

export const getAllProducts = (cookie?: string) =>
  fetcher.get("/product", {
    headers: {
      Cookie: cookie,
    },
  });

export const getProductById = (id: string, cookie?: string) =>
  fetcher.get("/product", {
    params: { id },
    headers: {
      Cookie: cookie,
    },
  });

export const createProduct = (
  product: z.infer<typeof createProductSchema>,
  cookie?: string
) =>
  fetcher.post("/product", {
    data: product,
    headers: {
      Cookie: cookie,
    },
  });
