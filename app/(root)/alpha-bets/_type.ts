import { z } from "zod";

export const addCategory = z.object({
  color: z.string().min(1, "ئەم خانە پێویستە"),
  audio_url: z.string().min(1, "ئەم خانە پێویستە"),
  example: z.string().min(1, "ئەم خانە پێویستە"),
  letter: z.string().min(1, "ئەم خانە پێویستە"),
  meaning: z.string().min(1, "ئەم خانە پێویستە"),
  order: z.string().min(1, "ئەم خانە پێویستە"),
  sentence: z.string().min(1, "ئەم خانە پێویستە"),
  sentence_meaning: z.string().min(1, "ئەم خانە پێویستە"),
});
export type addCategoryType = z.infer<typeof addCategory>;
