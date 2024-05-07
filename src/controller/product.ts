"use server";

import cookieParser from "@/lib/cookie";
import { controllerWrapper } from "@/lib/wrapper";
import { getProductSchema } from "@/model/product";
import { getAllProducts } from "@/model/product/action";
import { responseSchema } from "@/model/respone";
import { AxiosError } from "axios";

export const getFlashsaleProductsController = async () => {
  try {
    const response = await getAllProducts(cookieParser());
    if (response instanceof AxiosError) throw response;

    const validResponse = responseSchema.safeParse(response.data);
    if (!validResponse.success)
      return controllerWrapper({
        data: null,
        statusCode: response.status,
        message: validResponse.error.message,
      });

    const validProduct = getProductSchema
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
