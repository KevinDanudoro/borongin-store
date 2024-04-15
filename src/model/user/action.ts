import fetcher from "@/lib/axios";
import { z } from "zod";
import { signInUserSchema, signUpUserSchema } from ".";

export const signInUser = (user: z.infer<typeof signInUserSchema>) =>
  fetcher.post("/auth/signin", user);
export const signUpUser = (user: z.infer<typeof signUpUserSchema>) =>
  fetcher.post("/auth/signup", user);
