import fetcher from "@/lib/axios";

export const addCart = (productId: string, cookie: string) =>
  fetcher.post("/cart", { productId }, { headers: { Cookie: cookie } });
