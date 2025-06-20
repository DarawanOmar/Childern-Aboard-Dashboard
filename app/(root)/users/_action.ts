"use server";

import { deleteData } from "../services/dataService";

export const deleteUser = async (id: string) => {
  try {
    await deleteData("users", id, "/users");
    return { success: true, message: "Users deleted successfully" };
  } catch (error) {
    console.error("Error deleting users:", error);
    return {
      success: false,
      message: "An error occurred while deleting the users",
    };
  }
};
