"use server";

import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";

// Create
export const addData = async (
  collectionName: string,
  data: any,
  revalidatePathString: string
) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    revalidatePath(revalidatePathString);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

// Read (All)
export const getAllData = async (collectionName: string) => {
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
export const updateData = async (
  collectionName: string,
  id: string,
  data: any,
  revalidatePathString: string
) => {
  try {
    await updateDoc(doc(db, collectionName, id), data);
    revalidatePath(revalidatePathString);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

// Delete
export const deleteData = async (
  collectionName: string,
  id: string,
  revalidatePathString: string
) => {
  try {
    await deleteDoc(doc(db, collectionName, id));
    revalidatePath(revalidatePathString);
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};
