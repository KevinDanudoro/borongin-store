"use server";

import cookieParser from "@/lib/cookie";
import { addWishlist } from "@/model/wishlist/action";

export const addWishlistController = async (productId: string) => {
  try {
    const cookie = cookieParser();
    const wishlist = await addWishlist(productId, cookie);
    if (!wishlist.data) return null;
    return wishlist.data;
  } catch (err) {
    return null;
  }
};
