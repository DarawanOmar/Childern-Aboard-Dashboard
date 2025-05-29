"use server";

import { deleteData } from "../services/dataService";

export const deleteAlphaBet = async (id: string) => {
  try {
    await deleteData("kurdish_alphabet", id, "/alpha-bets");
    return { success: true, message: "Category deleted successfully" };
  } catch (error) {
    console.error("Error deleting category:", error);
    return {
      success: false,
      message: "An error occurred while deleting the category",
    };
  }
};
