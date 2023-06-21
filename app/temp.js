import { db } from "@/app/firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";

async function getUserData(userId) {
  const userDocRef = doc(collection(db, "users"), userId);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data();
}

export default getUserData;
