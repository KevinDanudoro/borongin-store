import { z } from "zod";

export const createTransactionSchema = z.object({
  firstname: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  phone: z
    .string()
    .min(1)
    .regex(/^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/),
});

export const responseTransactionSchema = z.object({
  transactionToken: z.string().min(1),
});
