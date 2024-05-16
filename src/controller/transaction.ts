"use server";

import cookieParser from "@/lib/cookie";
import { controllerWrapper } from "@/lib/wrapper";
import { responseSchema } from "@/model/respone";
import { responseTransactionSchema } from "@/model/transaction";
import { createProductTransaction } from "@/model/transaction/action";
import { AxiosError } from "axios";

export const createProductTransactionController = async (
  productId: string,
  quantity: number
) => {
  const cookie = cookieParser();
  if (!cookie)
    return controllerWrapper({
      data: null,
      statusCode: 401,
      message: "User session is missing",
    });
  try {
    const response = await createProductTransaction(
      productId,
      quantity,
      cookie
    );
    if (response instanceof AxiosError) throw response;

    const validResponse = responseSchema.safeParse(response.data);
    if (!validResponse.success)
      return controllerWrapper({
        data: null,
        statusCode: response.status,
        message: validResponse.error.message,
      });

    const validTrasactionResponse = responseTransactionSchema.safeParse(
      validResponse.data.data
    );
    if (!validTrasactionResponse.success)
      return controllerWrapper({
        data: null,
        statusCode: validResponse.data.statusCode,
        message: validResponse.data.message,
      });

    return controllerWrapper({
      data: validTrasactionResponse.data,
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
