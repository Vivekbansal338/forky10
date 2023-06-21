import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsforrTiUuyd3TTlyEG5bTwLd_bRSVBFE",
  authDomain: "experimentauth-a962d.firebaseapp.com",
  databaseURL: "https://experimentauth-a962d-default-rtdb.firebaseio.com",
  projectId: "experimentauth-a962d",
  storageBucket: "experimentauth-a962d.appspot.com",
  messagingSenderId: "795891270654",
  appId: "1:795891270654:web:bc5e619f4b3fcecb1176af",
  measurementId: "G-60L3TYSK7K",
  // Enable persistence
  persistence: "session",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
