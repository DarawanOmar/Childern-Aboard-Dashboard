import { db } from "@/lib/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { DetailCategory } from "./_type";

export async function getDetailCategoriesData(): Promise<DetailCategory[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as DetailCategory[];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
