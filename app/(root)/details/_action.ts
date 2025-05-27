"use server";

import { utapi } from "@/server/uploadthing";
import { deleteData } from "../services/dataService";

export const deleteDetailCategory = async (id: string) => {
  try {
    await deleteData("items", id);
    return { success: true, message: "Category deleted successfully" };
  } catch (error) {
    console.error("Error deleting category:", error);
    return {
      success: false,
      message: "An error occurred while deleting the category",
    };
  }
};

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
