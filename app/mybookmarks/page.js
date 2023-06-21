"use client";

import RecipeCard from "@/components/RecipeCard/RecipeCard";
import "./page.css";
import { useSelector } from "react-redux";
import { BookmarkActions } from "@/store/bookmark";
import { useDispatch } from "react-redux";
function Mybookmarks() {
  const dispatch = useDispatch();
  const bookmarkData = useSelector((state) => state.bookmarkData.bookmarks);

  const clearbookmarks = (e) => {
    console.log("clearing bookmarks");
    e.preventDefault();
    dispatch(BookmarkActions.clearBookmarks());
    console.log(bookmarkData);
  };

  return (
    <div className="mybookmark_container">
      <div className="container_title">
        <h2>My Bookmarks</h2>
        {bookmarkData.length > 0 && (
          <button onClick={clearbookmarks}>Clear Bookmarks</button>
        )}
      </div>
      <div className="mybookmark_container_items">
        {bookmarkData.map((bookmark) => (
          <RecipeCard
            key={bookmark.recipe_id}
            data={{ ...bookmark, price: bookmark.image_url.length }}
          />
        ))}
        {bookmarkData.length === 0 && (
          <h1 className="nobookmark">No Bookmark data</h1>
        )}
      </div>
    </div>
  );
}

export default Mybookmarks;
