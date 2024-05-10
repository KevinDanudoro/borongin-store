import { z } from "zod";

export const tableCartSchema = z.object({
  _id: z.string().min(1),
  image: z.string().min(1),
  name: z.string().min(1),
  price: z.coerce.number().min(0),
  quantity: z.number().min(0),
});

export const getCartSchema = z.array(
  z.object({
    quantity: z.number().min(0),
    product: z.object({
      _id: z.string().min(1),
      name: z.string().min(1),
      imageUrl: z.array(z.string().min(1)),
      price: z.coerce.number().min(0),
    }),
  })
);
