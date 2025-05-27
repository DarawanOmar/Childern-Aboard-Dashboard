import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Create
export const addData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

// Read (All)
export const getAllData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};

// Update
export const updateData = async (collectionName, id, data) => {
  try {
    await updateDoc(doc(db, collectionName, id), data);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

// Delete
export const deleteData = async (collectionName, id) => {
  try {
    await deleteDoc(doc(db, collectionName, id));
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};
