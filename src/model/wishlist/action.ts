import fetcher from "@/lib/axios";

export const getWishlist = (Cookie: string) =>
  fetcher.get("/wishlist", { headers: { Cookie } });
export const addWishlist = (productId: string, Cookie: string) =>
  fetcher.post(`/wishlist/${productId}`, {}, { headers: { Cookie } });
export const removeWishlist = (productId: string, Cookie: string) =>
  fetcher.delete(`/wishlist/${productId}`, { headers: { Cookie } });
