import { z } from "zod";

export const addCategory = z.object({
  color: z.string().min(1, "ئەم خانە پێویستە"),
  icon: z.string().min(1, "ئەم خانە پێویستە"),
  image_url: z.string().min(1, "ئەم خانە پێویستە"),
  label: z.string().min(1, "ئەم خانە پێویستە"),
  label_ar: z.string().min(1, "ئەم خانە پێویستە"),
});
export type addCategoryType = z.infer<typeof addCategory>;
