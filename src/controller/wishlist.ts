"use server";

import cookieParser from "@/lib/cookie";
import { controllerWrapper } from "@/lib/wrapper";
import { responseSchema } from "@/model/respone";
import { addWishlist, removeWishlist } from "@/model/wishlist/action";

export const addWishlistController = async (productId: string) => {
  try {
    const cookie = cookieParser() ?? "";
    const response = await addWishlist(productId, cookie);
    if (!response.data)
      return controllerWrapper({
        data: null,
        message: response.statusText,
        statusCode: response.status,
      });

    const validResponse = responseSchema.safeParse(response.data);
    if (!validResponse.success)
      return controllerWrapper({
        data: response.data,
        message: validResponse.error.message,
        statusCode: response.status,
      });

    return validResponse.data;
  } catch (err) {
    if (err instanceof Error)
      return controllerWrapper({
        data: null,
        message: err.message,
        statusCode: 500,
      });

    return controllerWrapper({
      data: null,
      message: "Something went wrong",
      statusCode: 500,
    });
  }
};

export const removeWishlistController = async (productId: string) => {
  try {
    const cookie = cookieParser() ?? "";
    const response = await removeWishlist(productId, cookie);
    if (!response.data)
      return controllerWrapper({
        data: null,
        message: response.statusText,
        statusCode: response.status,
      });

    const validResponse = responseSchema.safeParse(response.data);
    if (!validResponse.success)
      return controllerWrapper({
        data: response.data,
        message: validResponse.error.message,
        statusCode: response.status,
      });

    return validResponse.data;
  } catch (err) {
    if (err instanceof Error)
      return controllerWrapper({
        data: null,
        message: err.message,
        statusCode: 500,
      });

    return controllerWrapper({
      data: null,
      message: "Something went wrong",
      statusCode: 500,
    });
  }
};
