"use server";

import cookieParser from "@/lib/cookie";
import { controllerWrapper } from "@/lib/wrapper";
import { getCartSchema } from "@/model/cart";
import {
  addCart,
  getCart,
  removeCart,
  setCartQuantity,
} from "@/model/cart/action";
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

export const removeCartController = async (productId: string) => {
  const cookie = cookieParser();
  if (!cookie)
    return controllerWrapper({
      data: null,
      statusCode: 403,
      message: "User session not found",
    });

  try {
    const response = await removeCart(productId, cookie);
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
      statusCode: 500,
      message: "Bad server response schema",
    });
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
      statusCode: 500,
      message: "Bad server response schema",
    });
  }
};

export const setCartQuantityController = async (
  productId: string,
  quantity: number
) => {
  const cookie = cookieParser();
  if (!cookie)
    return controllerWrapper({
      data: null,
      statusCode: 403,
      message: "User session not found",
    });

  try {
    const response = await setCartQuantity(productId, quantity, cookie);
    const validResponse = responseSchema.parse(response.data);
    const validCart = getCartSchema.parse(validResponse.data);

    return controllerWrapper({
      data: validCart,
      message: validResponse.message,
      statusCode: validResponse.statusCode,
    });
  } catch (error) {
    console.log("error");
    return controllerWrapper({
      data: null,
      statusCode: 500,
      message: "Bad server response schema",
    });
  }
};
