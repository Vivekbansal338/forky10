// "use client";
// import { cartActions } from "../../store/cart";
// import { BookmarkActions } from "../../store/bookmark";
// import { useEffect, useState } from "react";
// import React from "react";
// import "./DetailAction.css";
// import { doc, setDoc, collection } from "firebase/firestore";
// import { db } from "@/app/firebase.config";
// import { useDispatch, useSelector } from "react-redux";

// function DetailAction(props) {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.userauth.user);
//   const [alreadybookmarked, setAlreadyBookmarked] = useState(false);
//   // const bookmarkData = useSelector((state) => state.bookmarkData.bookmarks);

//   // useEffect(() => {
//   //   console.log(bookmarkData, "bookkk");
//   //   if (user && bookmarkData.length > 0) {
//   //     console.log("inside");
//   //     bookmarkData.find((element) => {
//   //       if (element.recipe_id === props.elementdetails.recipe_id) {
//   //         setAlreadyBookmarked(true);
//   //       }
//   //     });
//   //   }
//   //   if (!user) {
//   //     setAlreadyBookmarked(false);
//   //   }
//   // }, [user, bookmarkData]);

//   function handleaddtocart() {
//     dispatch(
//       cartActions.addtocart({
//         uid: user.uid,
//         data: props.elementdetails,
//       })
//     );
//   }

//   function handlebookmark() {
//     dispatch(
//       BookmarkActions.toggleBookmarks({
//         uid: user.uid,
//         data: props.elementdetails,
//       })
//     );
//     async function addBookmark(uid, bookmarkData, bookmarkId) {
//       // Access the Bookmarkdata subcollection for the user
//       await setDoc(
//         doc(db, "users", uid, "bookmarkdata", bookmarkId),
//         bookmarkData
//       );
//       console.log("Bookmark added successfully!");
//     }
//     addBookmark(user.uid, props.elementdetails, props.elementdetails.recipe_id);
//   }

//   return (
//     <div className="detail-action">
//       <button
//         className="detail-action__button"
//         onClick={handleaddtocart}
//         disabled={user === 1 ? 0 : 1}
//         title={user === 1 ? "" : "Please log in to add to cart"}
//       >
//         Add to Cart
//       </button>
//       <button
//         className="detail-action__button"
//         onClick={handlebookmark}
//         // disabled={user === 1 ? 0 : 1}
//         // title={user === 1 ? "" : "Please log in to Bookmark it"}
//       >
//         {alreadybookmarked ? "Bookmarked" : "Bookmark"}
//       </button>
//     </div>
//   );
// }

// export default DetailAction;

// import { cartActions } from "../../store/cart";
import { useEffect, useState } from "react";
import React from "react";
import "./DetailAction.css";
import { doc, setDoc, collection, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  addtocart,
  removeBookmark,
} from "@/firestorefunctions/allfunctionsnew";

function DetailAction(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userauth.user);
  const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);

  useEffect(() => {
    const checkIfBookmarked = async () => {
      if (user) {
        const bookmarkDocRef = doc(
          db,
          "users",
          user.uid,
          "bookmarkdata",
          props.elementdetails.recipe_id
        );
        const docSnapshot = await getDoc(bookmarkDocRef);
        setAlreadyBookmarked(docSnapshot.exists());
      } else {
        setAlreadyBookmarked(false);
      }
    };

    checkIfBookmarked();
  }, [user, props.elementdetails.recipe_id]);

  function handleAddToCart() {
    const cartData = {
      ...props.elementdetails,
      price: parseFloat(props.elementdetails.image_url.length) || 100,
      quantity: 1,
    };
    addtocart(user.uid, cartData, props.elementdetails.recipe_id);
  }

  function handleBookmark() {
    if (alreadyBookmarked) {
      removeBookmark(user.uid, props.elementdetails.recipe_id);
    } else {
      addBookmark(
        user.uid,
        props.elementdetails,
        props.elementdetails.recipe_id
      );
    }
  }

  return (
    <div className="detail-action">
      <button
        className="detail-action__button"
        onClick={handleAddToCart}
        disabled={!user}
        title={!user ? "Please log in to add to cart" : ""}
      >
        Add to Cart
      </button>
      <button
        className="detail-action__button"
        onClick={handleBookmark}
        disabled={!user}
        title={!user ? "Please log in to bookmark it" : ""}
      >
        {alreadyBookmarked ? "Bookmarked" : "Bookmark"}
      </button>
    </div>
  );
}

export default DetailAction;
