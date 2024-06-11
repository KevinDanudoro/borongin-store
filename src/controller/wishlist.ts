"use server";

import { controllerWrapper } from "@/lib/wrapper";
import { getWishlist } from "@/model/wishlist/action";
import { responseSchema } from "@/model/respone";
import { addWishlist, removeWishlist } from "@/model/wishlist/action";
import { AxiosError } from "axios";
import { getWishlistSchema } from "@/model/wishlist";
import cookieParser from "@/lib/cookie";

export const getWishlistController = async () => {
  try {
    const cookie = cookieParser() ?? "";
    const response = await getWishlist(cookie);
    if (response instanceof AxiosError) throw response;

    const validResponse = responseSchema.safeParse(response.data);
    if (!validResponse.success)
      return controllerWrapper({
        data: null,
        statusCode: response.status,
        message: validResponse.error.message,
      });

    const validProduct = getWishlistSchema
      .array()
      .safeParse(validResponse.data.data);

    if (!validProduct.success)
      return controllerWrapper({
        data: null,
        statusCode: validResponse.data.statusCode,
        message: validProduct.error.message,
      });

    return controllerWrapper({
      data: validProduct.data,
      statusCode: validResponse.data.statusCode,
      message: validResponse.data.message,
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      return controllerWrapper({
        data: null,
        statusCode: err.response?.data.statusCode,
        message: err.response?.data.message,
      });
    }
    return controllerWrapper({
      data: null,
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

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
