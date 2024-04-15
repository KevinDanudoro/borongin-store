import { z } from "zod";

export const getUserSchema = z.object({
  username: z.string().min(1),
  email: z.string().min(1),
  image: z.string(),
  cart: z.array(z.string()).nullish(),
  wishlist: z.array(z.string()).nullish(),
});

export const signInUserSchema = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .email("email format is invalid"),
  password: z
    .string()
    .min(1, "password is required")
    .max(16, "password exceed 16 character"),
});

export const signUpUserSchema = z.object({
  username: z.string().min(1, "name is required"),
  email: z
    .string()
    .min(1, "email is required")
    .email("email format is invalid"),
  password: z
    .string()
    .min(1, "password is required")
    .max(16, "password exceed 16 character"),
});
