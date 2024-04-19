"use server";

import { jwtVerify } from "jose";
import { userSessionSchema } from "@/model/user";
import { cookies } from "next/headers";

const getJwtSession = async () => {
  try {
    const token = cookies().get("Authorization")?.value;
    console.log({ token });
    if (!token) return null;

    const { payload: decodedToken } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECRET)
    );
    console.log({ decodedToken });

    const parsedToken = userSessionSchema.safeParse(decodedToken);
    if (!parsedToken.success) return null;
    console.log({ parsedToken });

    return parsedToken.data;
  } catch (error) {
    console.log({ error });

    return null;
  }
};

export default getJwtSession;
