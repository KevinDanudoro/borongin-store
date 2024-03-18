import { z } from "zod";

export const filterSchema = z.object({
  minPrice: z.string().nullish(),
  maxPrice: z.string().nullish(),
  rating: z.array(z.string()).nullish(),
});
