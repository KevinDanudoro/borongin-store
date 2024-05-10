import fetcher from "@/lib/axios";

export const addWishlist = (productId: string, cookie: string) =>
  fetcher.post("/wishlist", { productId }, { headers: { Cookie: cookie } });
export const removeWishlist = (productId: string, cookie: string) =>
  fetcher.delete(`/wishlist/${productId}`, { headers: { Cookie: cookie } });

export const getWishlist = (Cookie: string) =>
  fetcher.get("/wishlist", { headers: { Cookie } });
