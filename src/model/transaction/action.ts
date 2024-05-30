import fetcher from "@/lib/axios";

export const createProductTransaction = (
  productId: string,
  quantity: number,
  Cookie: string
) =>
  fetcher.post(
    `/transaction/product/${productId}`,
    {},
    { params: { quantity }, headers: { Cookie } }
  );

export const createCartTransaction = (Cookie: string) =>
  fetcher.post("/transaction/cart", {}, { headers: { Cookie } });
