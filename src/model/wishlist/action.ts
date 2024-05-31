import fetcher from "@/lib/axios";

export const getWishlist = () => fetcher.get("/wishlist");
export const addWishlist = (productId: string) =>
  fetcher.post(`/wishlist/${productId}`, {});
export const removeWishlist = (productId: string) =>
  fetcher.delete(`/wishlist/${productId}`);
