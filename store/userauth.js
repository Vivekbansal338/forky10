import { createSlice } from "@reduxjs/toolkit";
import { auth, app, db } from "../app/firebase.config.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  deliveryAddresses,
  Carddummydata,
  profileData,
} from "@/Usefuldata/myaccountdata.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

async function createUserDocument(user) {
  const userDocRef = doc(db, "users", user.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    console.log("User exists in Firestore");
  } else {
    console.log("User does not exist in Firestore");

    // Create user document with subcollections (bookmark, cart)
    const userData = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
    };

    // Create user document
    await setDoc(userDocRef, userData);
    await setDoc(doc(db, "users", user.uid, "cartdata", "carttotals"), {
      totalamount: 0,
      totalcount: 0,
    });

    deliveryAddresses.forEach(async (address) => {
      await setDoc(
        doc(db, "users", user.uid, "deliverydata", address.id.toString()),
        address
      );
      console.log(address);
    });
    Carddummydata.forEach(async (card) => {
      console.log(card, user.uid, card.id, typeof card.id);
      await setDoc(
        doc(db, "users", user.uid, "PaymentCarddata", card.id.toString()),
        card
      );
    });
    profileData.forEach(async (profile) => {
      await setDoc(
        doc(db, "users", user.uid, "Profiledata", profile.id.toString()),
        profile
      );
    });

    console.log("User document created in Firestore");
  }
}

export const signInWithGoogle = () => async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    dispatch(
      setUser({ uid: user.uid, email: user.email, photoURL: user.photoURL })
    );

    await createUserDocument(user);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export const signUpWithEmail = (email, password) => async (dispatch) => {
  try {
    // const auth = getAuth(app);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        photoURL: "https://i.ibb.co/tD3hDHs/man.png",
      })
    );
    console.log("Signed in as:", user.email);
    await createUserDocument(user);
  } catch (error) {
    console.error("Error signing in:", error);
    if (error.code === "auth/email-already-in-use") {
      throw new Error("Email already in use");
    } else {
      throw new Error("Unknown error");
    }
  }
};

export const logInWithEmail = (email, password) => async (dispatch) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        photoURL: "https://i.ibb.co/tD3hDHs/man.png",
      })
    );
  } catch (error) {
    console.error("Error signing in:", error);
    if (error.code === "auth/user-not-found") {
      throw new Error("User not found");
    } else if (error.code === "auth/wrong-password") {
      throw new Error("Wrong password");
    } else {
      throw new Error("Unknown error");
    }
  }
};

export const signOut = () => async (dispatch) => {
  try {
    console.log("trying to signOut");
    await auth.signOut();
    dispatch(setUser(null));
    localStorage.removeItem("user");
    console.log("Signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

// "https://i.ibb.co/v17YmxT/5395250a-c094-4781-a3c0-9982deeb4e63.jpg"
