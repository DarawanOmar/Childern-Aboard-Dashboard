import { db } from "@/lib/firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getUsersData(): Promise<User[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      // Convert Timestamp to string or number
      const createdAt = data.createdAt
        ? new Date(data.createdAt.seconds * 1000).toISOString()
        : "";

      return {
        ...data,
        id: data.id,
        createdAt,
        birthday: data.birthday || "",
        age: data.age || "",
        name: data.name || "",
        password: data.password || "",
        phone: data.phone || "",
        state: data.state || "",
        location: data.location || "",
        gender: data.gender || "",
        email: data.email || "",
      };
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export interface User {
  id: string;
  age: string;
  birthday: string;
  gender: string;
  location: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  state: string;
  createdAt: string;
}
