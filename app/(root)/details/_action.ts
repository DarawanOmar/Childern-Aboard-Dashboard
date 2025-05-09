"use server";

import { utapi } from "@/server/uploadthing";

export const deleteIamge = async (imageKey: string) => {
  try {
    await utapi.deleteFiles(imageKey);
    return {
      message: "بە سەرکەوتویی سڕایەوە",
      success: true,
    };
  } catch (error) {
    return {
      message: "هەڵەیەک هەیە",
      success: false,
    };
  }
};
