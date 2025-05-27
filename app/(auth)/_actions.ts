"use server";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { loginSchemaType } from "./_component/lib";
import { db } from "@/lib/firebase";

export async function loginAction(data: loginSchemaType) {
  try {
    const adminsRef = collection(db, "admin");
    const q = query(adminsRef, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, message: "Admin not found" };
    }

    const adminDoc = querySnapshot.docs[0].data();

    if (adminDoc.password !== data.password) {
      return { success: false, message: "Invalid credentials" };
    }

    const { password, ...adminData } = adminDoc;
    return {
      success: true,
      data: adminData,
    };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "An error occurred during login" };
  }
}
