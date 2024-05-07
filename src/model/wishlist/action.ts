import fetcher from "@/lib/axios";

export const addWishlist = (productId: string, cookie: string) =>
  fetcher.post("/wishlist", { productId }, { headers: { Cookie: cookie } });
