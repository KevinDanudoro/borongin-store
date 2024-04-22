"use server";

import cookieParser from "@/lib/cookie";
import { controllerWrapper } from "@/lib/wrapper";
import { responseSchema } from "@/model/respone";
import {
  getUserSchema,
  signInUserSchema,
  signUpUserSchema,
} from "@/model/user";
import { addUserCart, signInUser, signUpUser } from "@/model/user/action";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { z } from "zod";

export const signUpUserController = async (
  user: z.infer<typeof signUpUserSchema>
) => {
  try {
    const { data: response, status, statusText } = await signUpUser(user);

    const validResponse = responseSchema.safeParse(response);
    if (!validResponse.success)
      return controllerWrapper({
        data: null,
        statusCode: status,
        message: statusText,
      });

    const validUser = getUserSchema.safeParse(validResponse.data.data);
    if (!validUser.success)
      return controllerWrapper({
        data: null,
        statusCode: 400,
        message: validResponse.data.message,
      });

    return controllerWrapper({
      data: validUser.data,
      statusCode: validResponse.data.statusCode,
      message: validResponse.data.message,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return controllerWrapper({
        data: null,
        statusCode: error.response?.data.statusCode || 500,
        message: error.response?.data.message || "Something went wrong",
      });
    }
    return controllerWrapper({
      data: null,
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

export const signInUserController = async (
  user: z.infer<typeof signInUserSchema>
) => {
  try {
    const { data: response, headers } = await signInUser(user);

    const authCookie = headers["set-cookie"]?.join().split(";")[0].split("=");
    if (authCookie?.length === 2 && authCookie[0] === "Authorization")
      cookies().set(authCookie[0], authCookie[1], {
        maxAge: 60 * 60,
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      });
    else {
      return controllerWrapper({
        data: null,
        statusCode: 500,
        message: "Failed to attach cookies",
      });
    }

    const validResponse = responseSchema.safeParse(response);
    if (!validResponse.success)
      return controllerWrapper({
        data: null,
        statusCode: 400,
        message: "Bad server response",
      });

    const validUser = getUserSchema.safeParse(validResponse.data.data);
    if (!validUser.success)
      return controllerWrapper({
        data: null,
        statusCode: 400,
        message: "Bad user schema response",
      });

    return controllerWrapper({
      data: validUser.data,
      statusCode: 200,
      message: validResponse.data.message,
    });
  } catch (error) {
    return controllerWrapper({
      data: null,
      statusCode: 500,
      message: "Something went wrong",
    });
  }
};

export const signOutUserController = async () => {
  try {
    cookies().delete("Authorization");
    return controllerWrapper({
      data: null,
      statusCode: 200,
      message: "Success to sign out",
    });
  } catch (err) {
    return controllerWrapper({
      data: null,
      statusCode: 500,
      message: "Failed to sign out",
    });
  }
};

export const addUserCartController = async (productId: string) => {
  try {
    const cookie = cookieParser();
    const userCart = await addUserCart(productId, cookie);
    if (!userCart.data) return null;
    return userCart.data;
  } catch (err) {
    return null;
  }
};
