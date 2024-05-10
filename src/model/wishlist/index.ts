import { z } from "zod";

export const getWishlistSchema = z.object({
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
