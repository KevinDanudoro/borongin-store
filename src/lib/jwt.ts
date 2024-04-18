"use server";

import { jwtVerify } from "jose";
import { userSessionSchema } from "@/model/user";
import { cookies } from "next/headers";

const getJwtSession = async () => {
  try {
    const token = cookies().get("Authorization")?.value;
    if (!token) return null;

    const { payload: decodedToken } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECRET)
    );

    const parsedToken = userSessionSchema.safeParse(decodedToken);
    if (!parsedToken.success) return null;

    return parsedToken.data;
  } catch (error) {
    return null;
  }
};

export default getJwtSession;
