import { z } from "zod";

export const addDetailCategory = z.object({
  category_id: z.string().min(1, "ئەم خانە پێویستە"),
  category_name: z.string().min(1, "ئەم خانە پێویستە"),
  description: z.string().min(1, "ئەم خانە پێویستە"),
  description_ar: z.string().min(1, "ئەم خانە پێویستە"),
  image_url: z.string().min(1, "ئەم خانە پێویستە"),
  location: z.string().min(1, "ئەم خانە پێویستە"),
  location_ar: z.string().min(1, "ئەم خانە پێویستە"),
  name: z.string().min(1, "ئەم خانە پێویستە"),
  name_ar: z.string().min(1, "ئەم خانە پێویستە"),
  long_description_ar: z.string().min(1, "ئەم خانە پێویستە"),
  long_description: z.string().min(1, "ئەم خانە پێویستە"),
  is_course: z.boolean().optional(),
  video_url: z.string().optional(),
  audio_url: z.string().optional(),
  createdAt: z.string().optional(),
});
export type addDetailCategoryType = z.infer<typeof addDetailCategory>;

export interface DetailCategory {
  id: string;
  audio_url: string;
  category_id: string;
  category_name: string;
  description: string;
  description_ar: string;
  image_url: string;
  is_course: boolean;
  location: string;
  location_ar: string;
  name: string;
  name_ar: string;
  video_url: string;
  long_description: string;
  long_description_ar: string;
}
