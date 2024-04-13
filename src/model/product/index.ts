import z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
  image: z.array(z.string().min(1)),
  price: z.coerce.number().min(0),
  quantity: z.coerce.number().min(1),
});

export const getProductSchema = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
  image: z.array(z.string().min(1)),
  price: z.coerce.number().min(0),
  quantity: z.coerce.number().min(1),
});
