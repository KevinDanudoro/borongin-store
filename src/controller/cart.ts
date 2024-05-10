"use server";

import cookieParser from "@/lib/cookie";
import { controllerWrapper } from "@/lib/wrapper";
import { getCartSchema } from "@/model/cart";
import { addCart, getCart } from "@/model/cart/action";
import { responseSchema } from "@/model/respone";

export const addCartController = async (productId: string) => {
  try {
    const cookie = cookieParser();
    const cart = await addCart(productId, cookie ?? "");
    if (!cart.data) return null;
    return cart.data;
  } catch (err) {
    return null;
  }
};

export const getCartController = async () => {
  const cookie = cookieParser() ?? "";
  try {
    const response = await getCart(cookie);
    const validResponse = responseSchema.parse(response.data);
    const validCart = getCartSchema.parse(validResponse.data);
    return controllerWrapper({
      data: validCart,
      message: validResponse.message,
      statusCode: validResponse.statusCode,
    });
  } catch (err) {
    return controllerWrapper({
      data: null,
      statusCode: 400,
      message: "Bad server response schema",
    });
  }
};
