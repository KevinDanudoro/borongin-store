import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "email is required")
    .email("email format is invalid"),
  password: z
    .string()
    .min(1, "password is required")
    .max(16, "password exceed 16 character"),
});

export const signUpSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z
    .string()
    .min(1, "email is required")
    .email("email format is invalid"),
  password: z
    .string()
    .min(1, "password is required")
    .max(16, "password exceed 16 character"),
});
