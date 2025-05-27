import { db } from "@/lib/firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getAdminData(): Promise<Admin[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "admin"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Admin[];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  image_url: string;
  password?: string;
  createdAt: string;
}
