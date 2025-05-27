import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import { DetailCategory } from "./_type";

export async function getDetailCategoriesData(
  category_id: string
): Promise<DetailCategory[]> {
  try {
    const itemsRef = collection(db, "items");

    const q = category_id
      ? query(itemsRef, where("category_id", "==", category_id))
      : query(itemsRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as DetailCategory[];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
