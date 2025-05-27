// app/page.tsx
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Timestamp;
}

export default async function MainPage() {
  // Fetch users data from Firestore
  const users = await getUsersData();

  // Format timestamp to readable date
  const formatDate = (timestamp: Timestamp) => {
    return new Date(timestamp.toMillis()).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Password</th>
              <th className="py-2 px-4 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.password}</td>
                <td className="py-2 px-4 border-b">
                  {formatDate(user.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

async function getUsersData(): Promise<User[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      email: doc.data().email,
      name: doc.data().name,
      password: doc.data().password,
      createdAt: doc.data().createdAt,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
