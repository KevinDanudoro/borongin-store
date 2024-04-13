import { z } from "zod";

export const responseSchema = z.object({
  data: z.any(),
  message: z.string(),
  statusCode: z.number(),
});
