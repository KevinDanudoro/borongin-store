import z from "zod";

export const productSchema = z.object({
  name: z.string().min(1),
  image: z.string().min(1),
  price: z.coerce.number().min(0),
  quantity: z.coerce.number().min(1),
});

export const createProductSchema = z.object({
  name: z.string().min(1),
  desc: z.string().min(1),
  image: z.array(z.string().min(1)),
  price: z.coerce.number().min(0),
  quantity: z.coerce.number().min(1),
});

export const getProductSchema = z.object({
  _id: z.string().min(1),
  name: z.string().min(1),
  desc: z.string().min(1),
  imageUrl: z.array(z.string().min(1)),
  price: z.coerce.number().min(0),
  rating: z.number().min(0),
  sold: z.number().min(0),
  isCart: z.boolean().nullish(),
  isWishlist: z.boolean().nullish(),
});

export const buyProductSchema = z.object({
  size: z.enum(["xs", "s", "m", "l", "xl"]),
  quantity: z.coerce.number().min(1),
});

export const checkoutProductSchema = z.object({
  firstname: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  phone: z
    .string()
    .min(1)
    .regex(/^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/),
  payment: z.enum(["bank", "cod"]),
});

export const filterProductSchema = z.object({
  minPrice: z.string().nullish(),
  maxPrice: z.string().nullish(),
  rating: z.array(z.string()).nullish(),
});
