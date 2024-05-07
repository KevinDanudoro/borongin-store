import { z } from "zod";

export const getCartSchema = z
  .array(
    z.object({
      quantity: z.number().min(0),
      product: z.string().min(1),
    })
  )
  .nullish();
