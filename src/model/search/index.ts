import { z } from "zod";

export const sortingSchema = z.enum([
  "most-related",
  "most-reviewed",
  "most-expensive",
  "most-cheap",
]);
