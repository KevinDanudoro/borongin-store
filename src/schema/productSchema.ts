import { z } from "zod";

const buyProductSchema = z.object({
  size: z.enum(["xs", "s", "m", "l", "xl"]).nullish(),
  quantity: z.coerce.number().min(1),
});

export { buyProductSchema };
