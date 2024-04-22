import { z } from "zod";

export const getUserSchema = z.object({
  username: z.string().min(1),
  email: z.string().min(1),
  image: z.string().nullish(),
  cart: z.array(z.object({})).nullish(),
  wishlist: z.array(z.object({})).nullish(),
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

export const userSessionSchema = z.object({
  id: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email().min(1),
  iat: z.number(),
  exp: z.number(),
});
