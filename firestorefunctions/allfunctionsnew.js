import { db } from "@/app/firebase.config.js";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";

export async function getcartdata(uid) {
  const cartdata = await getDoc(doc(db, "users", uid, "cartdata"));
  return cartdata.data();
}

// export async function clearcart(uid) {
//   // const cartdata = await collection(db, "users", uid, "cartdata");
//   // console.log(cartdata);

//   const querySnapshot = await getDocs(collection(db, "users", uid, "cartdata"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data(), doc.id);

//     if (doc.id !== "carttotals") {
//       await deleteDoc(doc(db, "users", uid, "cartdata", doc.id));
//     }
//   });
//   // console.log(cartdata.data());
//   // const cartdataarray = cartdata.data();
//   // cartdataarray.forEach(async (cartitem) => {
//   //   console.log(cartitem);
//   //   // await deleteDoc(doc(db, "users", uid, "cartdata", cartitem.id));
//   // });
// }
export async function clearcart(uid) {
  const querySnapshot = await getDocs(collection(db, "users", uid, "cartdata"));
  for (const doc of querySnapshot.docs) {
    if (doc.id !== "carttotals") {
      await deleteDoc(doc.ref);
    }
    if (doc.id === "carttotals") {
      await updateDoc(doc.ref, {
        totalamount: 0,
        totalcount: 0,
      });
    }
  }
}

export async function addtocart(uid, cartData, cartId) {
  const carttotals = doc(db, "users", uid, "cartdata", "carttotals");
  const carttotalsdata = await getDoc(carttotals);

  const cartDocRef = doc(db, "users", uid, "cartdata", cartId);
  const docSnapshot = await getDoc(cartDocRef);
  if (docSnapshot.exists()) {
    const previousQuantity = docSnapshot.data().quantity;
    await setDoc(
      doc(db, "users", uid, "cartdata", cartId),
      {
        ...cartData,
        quantity: previousQuantity + 1,
      },
      { merge: true }
    );

    await updateDoc(carttotals, {
      totalamount:
        carttotalsdata.data().totalamount + parseInt(cartData.price, 10),
      totalcount: carttotalsdata.data().totalcount + 1,
    });
    console.log("Cart updated successfully!");
  } else {
    await setDoc(doc(db, "users", uid, "cartdata", cartId), cartData);

    await updateDoc(carttotals, {
      totalamount:
        carttotalsdata.data().totalamount + parseInt(cartData.price, 10),
      totalcount: carttotalsdata.data().totalcount + 1,
    });
    console.log("Cart added successfully!");
  }
}

export async function removefromcart(uid, cartId) {
  const carttotals = doc(db, "users", uid, "cartdata", "carttotals");
  const carttotalsdata = await getDoc(carttotals);

  const cartDocRef = doc(db, "users", uid, "cartdata", cartId);
  const docSnapshot = await getDoc(cartDocRef);
  if (docSnapshot.exists()) {
    const previousQuantity = docSnapshot.data().quantity;
    if (previousQuantity > 1) {
      await setDoc(
        doc(db, "users", uid, "cartdata", cartId),
        {
          ...docSnapshot.data(),
          quantity: previousQuantity - 1,
        },
        { merge: true }
      );
      await updateDoc(carttotals, {
        totalamount:
          carttotalsdata.data().totalamount - docSnapshot.data().price,
        totalcount: carttotalsdata.data().totalcount - 1,
      });
      console.log("Cart updated successfully!");
    }

    if (previousQuantity === 1) {
      await deleteDoc(doc(db, "users", uid, "cartdata", cartId));
      await updateDoc(carttotals, {
        totalamount:
          carttotalsdata.data().totalamount - docSnapshot.data().price,
        totalcount: carttotalsdata.data().totalcount - 1,
      });
      console.log("Cart removed successfully!");
    }
  }
}

export async function addBookmark(uid, bookmarkData, bookmarkId) {
  await setDoc(doc(db, "users", uid, "bookmarkdata", bookmarkId), bookmarkData);
  console.log("Bookmark added successfully!");
}

export async function removeBookmark(uid, bookmarkId) {
  await deleteDoc(doc(db, "users", uid, "bookmarkdata", bookmarkId));
  console.log("Bookmark removed successfully!");
}
