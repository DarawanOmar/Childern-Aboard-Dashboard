import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";

export async function getFeedbackData(
  feedbackType: string
): Promise<Feedback[]> {
  try {
    const feedbacksRef = collection(db, "feedbacks");
    // If feedbackType is provided, create a query to filter by it
    const q = feedbackType
      ? query(feedbacksRef, where("feedbackType", "==", feedbackType))
      : feedbacksRef;

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      feedbackType: doc.data().feedbackType,
      message: doc.data().message || "",
      subject: doc.data().subject || "",
      timestamp:
        doc.data().timestamp?.toDate().toISOString() ||
        new Date().toISOString(),
      type: doc.data().type,
      rating: doc.data().rating || 0,
    }));
  } catch (error) {
    console.error("Error fetching Feedbacks ", error);
    return [];
  }
}
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export interface Feedback {
  feedbackType: string;
  message: string;
  subject: string;
  rating: number;
  timestamp: string;
  type: string;
}
