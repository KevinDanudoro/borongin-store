import { responseSchema } from "@/model/respone";
import { getUserSchema, signInUserSchema } from "@/model/user";
import { signInUser } from "@/model/user/action";
import { z } from "zod";

export const signInUserController = async (
  user: z.infer<typeof signInUserSchema>
) => {
  try {
    const { data: response } = await signInUser(user);

    const validResponse = responseSchema.safeParse(response);
    if (!validResponse.success) return null;

    const validUser = getUserSchema.safeParse(validResponse.data.data);
    if (!validUser.success) return null;

    return validUser.data;
  } catch (error) {
    return null;
  }
};
