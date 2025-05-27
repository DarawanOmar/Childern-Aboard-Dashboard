import { db } from "@/lib/firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getCategoriesData(): Promise<Category[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      color: doc.data().color || "",
      icon: doc.data().icon || "",
      image_url: doc.data().image_url || "",
      label: doc.data().label || "",
      label_ar: doc.data().label_ar || "",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export interface Category {
  id: string;
  color: string;
  icon: string;
  image_url: string;
  label: string;
  label_ar: string;
}
