import { z } from "zod";

export const getWishlistSchema = z.array(z.string());
