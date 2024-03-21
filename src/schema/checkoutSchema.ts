import { z } from "zod";

const checkoutSchema = z.object({
  firstname: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  phone: z
    .string()
    .min(1)
    .regex(/^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/),
  payment: z.enum(["bank", "cod"]),
});

export { checkoutSchema };
