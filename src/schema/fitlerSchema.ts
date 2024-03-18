import { z } from "zod";

export const filterSchema = z.object({
  minPrice: z.string().nullish(),
  maxPrice: z.string().nullish(),
  rating: z.array(z.coerce.number().min(1).max(5)).nullish(),
});
