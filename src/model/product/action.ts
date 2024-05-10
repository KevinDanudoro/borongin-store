import z from "zod";
import fetcher from "@/lib/axios";
import { createProductSchema } from ".";

export const getAllProducts = (Cookie?: string) =>
  fetcher.get("/product", Cookie ? { headers: { Cookie } } : {});

export const getProductById = (id: string) =>
  fetcher.get("/product", {
    params: { id },
  });

export const createProduct = (
  product: z.infer<typeof createProductSchema>,
  cookie: string
) =>
  fetcher.post("/product", {
    data: product,
    headers: {
      Cookie: cookie,
    },
  });
