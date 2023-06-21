// import { createSlice } from "@reduxjs/toolkit";
// import { auth, app } from "../app/firebase.config.js";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   setPersistence,
//   browserSessionPersistence,
// } from "firebase/auth";
// const initialState = {
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//   },
// });

// export const { setUser } = authSlice.actions;
// export default authSlice.reducer;

// export const signInWithGoogle = () => async (dispatch) => {
//   try {
//     const provider = new GoogleAuthProvider();
//     const result = await signInWithPopup(getAuth(app), provider);
//     const user = result.user;
//     dispatch(setUser(user));
//     console.log("Signed in as:", user.email);
//   } catch (error) {
//     console.error("Error signing in:", error);
//   }
// };

// // export const signInWithGoogle = () => async (dispatch) => {
// //   try {
// //     console.log("trying to signInWithGoogle");
// //     const provider = new GoogleAuthProvider();
// //     const authInstance = getAuth(app);
// //     await setPersistence(authInstance, browserSessionPersistence);
// //     const result = await signInWithPopup(authInstance, provider);
// //     const user = result.user;
// //     console.log("user", user);
// //     dispatch(setUser(user));
// //     console.log("Signed in as:", user.email);
// //   } catch (error) {
// //     console.error("Error signing in:", error);
// //   }
// // };

// export const signOut = () => async (dispatch) => {
//   try {
//     console.log("trying to signOut");
//     await auth.signOut();
//     dispatch(setUser(null));
//     console.log("Signed out");
//   } catch (error) {
//     console.error("Error signing out:", error);
//   }
// };

import { createSlice } from "@reduxjs/toolkit";
import { auth, app, db } from "../app/firebase.config.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

export const signInWithGoogle = () => async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(getAuth(app), provider);
    const user = result.user;
    dispatch(
      setUser({ uid: user.uid, email: user.email, photoURL: user.photoURL })
    );
    console.log("Signed in as:", user.email);

    // Check if user exists in Firestore
    console.log("Checking if user exists in Firestore", db);
    const userDocRef = doc(db, "users", user.uid);
    console.log("userDocRef", userDocRef);
    const userDocSnapshot = await getDoc(userDocRef);
    console.log("userDocSnapshot", userDocSnapshot);
    if (userDocSnapshot.exists()) {
      console.log("userDocSnapshot exists");
    }

    if (!userDocSnapshot.exists()) {
      // Create new user document in Firestore
      console.log("Creating new user document in Firestore");
      const newUserDoc = {
        bookmarkData: {
          bookmarks: [],
        },
        cart: {
          totalCount: 0,
          totalAmount: 0,
          data: [],
        },
        coupons: {
          coupons: [],
        },
        delivery: {
          addresses: [],
        },
        selectedOrderDetails: {
          deliveryDetails: null,
          paymentCardDetails: null,
          discountCouponDetails: null,
        },
        payment: {
          cards: [],
        },
        orderHistory: {
          orders: [],
        },
      };
      await setDoc(userDocRef, newUserDoc);
      console.log("Created new user document in Firestore");
    }
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export const signOut = () => async (dispatch) => {
  try {
    console.log("trying to signOut");
    await auth.signOut();
    dispatch(setUser(null));
    console.log("Signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
