"use server";

import { responseSchema } from "@/model/respone";
import { getUserSchema, signInUserSchema } from "@/model/user";
import { signInUser } from "@/model/user/action";
import { cookies } from "next/headers";
import { z } from "zod";

export const signInUserController = async (
  user: z.infer<typeof signInUserSchema>
) => {
  try {
    const { data: response, headers } = await signInUser(user);

    const authCookie = headers["set-cookie"]?.join().split(";")[0].split("=");
    if (authCookie?.length === 2 && authCookie[0] === "Authorization")
      cookies().set(authCookie[0], authCookie[1], {
        expires: 1000 * 60 * 60,
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      });

    const validResponse = responseSchema.safeParse(response);
    if (!validResponse.success) return null;

    const validUser = getUserSchema.safeParse(validResponse.data.data);
    if (!validUser.success) return null;

    return validUser.data;
  } catch (error) {
    return null;
  }
};
