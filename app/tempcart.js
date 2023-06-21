import { db } from "@/app/firebase.config.js";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";

export async function updateCartData(userId, cart) {
  await updateDoc(doc(collection(db, "users"), userId), {
    cart: cart,
  });
}
export async function getCartData(userId) {
  const userDocRef = doc(collection(db, "users"), userId);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data().cart;
}
