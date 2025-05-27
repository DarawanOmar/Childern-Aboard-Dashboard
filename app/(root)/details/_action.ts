"use server";

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
