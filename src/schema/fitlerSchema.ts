import { z } from "zod";

export const filterSchema = z.object({
  minPrice: z.string().min(1, "minimum price is required"),
  maxPrice: z.string().min(1, "minimum price is required"),
  rating: z.preprocess(
    (value) => parseInt(z.string().parse(value), 10),
    z.number().min(1).max(5)
  ),
});
