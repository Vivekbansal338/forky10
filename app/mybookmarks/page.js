"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { collection, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import "./page.css";

function MyBookmarks() {
  const dispatch = useDispatch();
  const [bookmarkData, setBookmarkData] = useState([]);
  const user = useSelector((state) => state.userauth.user);
  const uid = user ? user.uid : null;

  useEffect(() => {
    let unsubscribe;

    if (uid) {
      const bookmarkCollectionRef = collection(
        db,
        "users",
        uid,
        "bookmarkdata"
      );
      unsubscribe = onSnapshot(bookmarkCollectionRef, (querySnapshot) => {
        const bookmarks = [];
        querySnapshot.forEach((doc) => {
          const bookmark = doc.data();
          bookmarks.push(bookmark);
        });
        setBookmarkData(bookmarks);
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [uid, bookmarkData]);

  const clearBookmarks = async () => {
    try {
      const bookmarkCollectionRef = collection(
        db,
        "users",
        uid,
        "bookmarkdata"
      );
      const querySnapshot = await getDocs(bookmarkCollectionRef);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    } catch (error) {
      console.error("Error clearing bookmarks:", error);
    }
  };

  return (
    <div className="mybookmark_container">
      <div className="container_title">
        <h2>My Bookmarks</h2>
        {bookmarkData.length > 0 && (
          <button onClick={clearBookmarks}>Clear Bookmarks</button>
        )}
      </div>
      <div className="mybookmark_container_items">
        {bookmarkData.length > 0 ? (
          bookmarkData.map((bookmark) => (
            <RecipeCard
              key={bookmark.recipe_id}
              data={{ ...bookmark, price: bookmark.image_url.length }}
            />
          ))
        ) : (
          <h1 className="nobookmark">No Bookmark data</h1>
        )}
      </div>
    </div>
  );
}

export default MyBookmarks;
