import { db } from "@/lib/firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getAlphabetData(): Promise<AlphaBet[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "kurdish_alphabet"));
    return querySnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<AlphaBet, "id">;
      return {
        id: doc.id,
        ...data,
      };
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export interface AlphaBet {
  id: string;
  audio_url: string;
  color: string;
  example: string;
  letter: string;
  meaning: string;
  order: string;
  sentence: string;
  sentence_meaning: string;
}
