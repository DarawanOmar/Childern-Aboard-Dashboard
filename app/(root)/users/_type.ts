import { z } from "zod";

export const addUser = z.object({
  name: z.string().min(1, "ئەم خانە پێویستە"),
  email: z.string().min(1, "ئەم خانە پێویستە"),
  password: z.string().min(1, "ئەم خانە پێویستە"),
  age: z.string().min(1, "ئەم خانە پێویستە"),
  gender: z.string().min(1, "ئەم خانە پێویستە"),
  location: z.string().min(1, "ئەم خانە پێویستە"),
  phone: z.string().min(1, "ئەم خانە پێویستە"),
  state: z.string().min(1, "ئەم خانە پێویستە"),
  birthday: z.string().optional(),
});
export type addUserType = z.infer<typeof addUser>;
