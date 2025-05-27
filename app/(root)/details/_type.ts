import { z } from "zod";

export const addDetailCategory = z.object({
  audio_url: z.string().min(1, "ئەم خانە پێویستە"),
  category_id: z.string().min(1, "ئەم خانە پێویستە"),
  description: z.string().min(1, "ئەم خانە پێویستە"),
  description_ar: z.string().min(1, "ئەم خانە پێویستە"),
  image_url: z.string().min(1, "ئەم خانە پێویستە"),
  is_course: z.string().min(1, "ئەم خانە پێویستە"),
  location: z.string().min(1, "ئەم خانە پێویستە"),
  location_ar: z.string().min(1, "ئەم خانە پێویستە"),
  name: z.string().min(1, "ئەم خانە پێویستە"),
  name_ar: z.string().min(1, "ئەم خانە پێویستە"),
  video_url: z.string().min(1, "ئەم خانە پێویستە"),
  long_description_ar: z.array(z.string().optional()).optional(),
  long_description: z.array(z.string().optional()).optional(),
});
export type addDetailCategoryType = z.infer<typeof addDetailCategory>;

export interface DetailCategory {
  id: string;
  audio_url: string;
  category_id: string;
  description: string;
  description_ar: string;
  image_url: string;
  is_course: string;
  location: string;
  location_ar: string;
  name: string;
  name_ar: string;
  video_url: string;
  long_description: string[];
  long_description_ar: string[];
}
