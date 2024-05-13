import fetcher from "@/lib/axios";

export const getCart = (Cookie: string) =>
  fetcher.get("/cart", { headers: { Cookie } });
export const addCart = (productId: string, cookie: string) =>
  fetcher.post(`/cart/${productId}`, {}, { headers: { Cookie: cookie } });
export const removeCart = (productId: string, Cookie: string) =>
  fetcher.delete(`/cart/${productId}`, { headers: { Cookie } });
export const setCartQuantity = (
  productId: string,
  quantity: number,
  Cookie: string
) => fetcher.put(`/cart/${productId}`, { quantity }, { headers: { Cookie } });
