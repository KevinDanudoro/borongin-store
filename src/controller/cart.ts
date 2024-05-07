"use server";

import cookieParser from "@/lib/cookie";
import { addCart } from "@/model/cart/action";

export const addCartController = async (productId: string) => {
  try {
    const cookie = cookieParser();
    const cart = await addCart(productId, cookie);
    if (!cart.data) return null;
    return cart.data;
  } catch (err) {
    return null;
  }
};
