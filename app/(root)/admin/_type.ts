import { z } from "zod";

export const addCategory = z.object({
  name: z.string().min(1, "ئەم خانە پێویستە"),
  email: z.string().email().min(1, "ئەم خانە پێویستە"),
  image_url: z.string().min(1, "ئەم خانە پێویستە"),
  password: z.string().optional(),
  createdAt: z.string().optional(),
});
export type addCategoryType = z.infer<typeof addCategory>;
