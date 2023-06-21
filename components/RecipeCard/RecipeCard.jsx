// import React from "react";
// import "./RecipeCard.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// // const recipetempData = {
// //   image_url:
// //     "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
// //   publisher: "101 Cookbooks",
// //   publisher_url: "http://www.101cookbooks.com",
// //   recipe_id: "47746",
// //   social_rank: 100,
// //   source_url: "http://www.101cookbooks.com/archives/001199.html",
// //   title: "Best Pizza Dough Ever",
// // };

// function RecipeCard(props) {
//   const user = useSelector((state) => state.userauth.user);
//   const bookmarkdata = useSelector((state) => state.bookmarkData.bookmarks);

//   const router = useRouter();
//   const {
//     image_url,
//     publisher,
//     publisher_url,
//     recipe_id,
//     social_rank,
//     source_url,
//     title,
//     price,
//   } = props.data;

//   const handlerouter = (e) => {
//     e.preventDefault();
//     router.push(`/searchresults/${recipe_id}`);
//   };

//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [buttonText, setButtonText] = useState("Add to Bookmarks");

//   if (user && bookmarkdata.length > 0) {
//     bookmarkdata.find((element) => {
//       if (element.recipe_id === recipe_id) {
//         setIsBookmarked(true);
//       }
//     });
//   }

//   const handleBookmark = (e) => {
//     e.stopPropagation();
//     setIsBookmarked(!isBookmarked);
//   };

//   return (
//     <div className="recipe-card" onClick={handlerouter}>
//       <div className="recipe-image">
//         <img src={image_url} alt="Recipe" />
//         <p className="recipe-price">&#8377;{price}</p>
//       </div>
//       <div className="recipe-details">
//         <h2>{title.slice(0, 70)}...</h2>
//         <p>By : {publisher.slice(0, 20)}...</p>
//         <button
//           className={`bookmark ${isBookmarked ? "active" : ""}`}
//           onClick={handleBookmark}
//         >
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RecipeCard;import React, { useState, useEffect } from "react";
"use client";
import { useRouter } from "next/navigation";

import "./RecipeCard.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookmarkActions } from "../../store/bookmark";

function RecipeCard(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { image_url, publisher, recipe_id, title, price } = props.data;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [buttonText, setButtonText] = useState("Bookmark");
  const user = useSelector((state) => state.userauth.user);
  // const [bookmarkData, setBookmarkData] = useState([]);
  // setBookmarkData(useSelector((state) => state.bookmarkData.bookmarks));

  // useEffect(() => {
  //   setBookmarkData();
  // }, []);

  const handleRouter = (e) => {
    e.preventDefault();
    router.push(`/searchresults/${recipe_id}`);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    if (!user) return;
    dispatch(
      BookmarkActions.toggleBookmarks({
        uid: user.uid,
        data: props.data,
      })
    );
  };

  // useEffect(() => {
  //   if (isBookmarked) {
  //     setButtonText("Remove from Bookmarks");
  //   } else {
  //     setButtonText("Add to Bookmarks");
  //   }
  // }, [isBookmarked]);

  // useEffect(() => {
  //   if (user && bookmarkData.length > 0) {
  //     const isBookmarkedRecipe = bookmarkData.some(
  //       (bookmark) => bookmark.recipe_id === recipe_id
  //     );
  //     if (isBookmarkedRecipe) {
  //       setIsBookmarked(true);
  //     }
  //   }
  // }, [user, bookmarkData, recipe_id]);

  return (
    <div className="recipe-card" onClick={handleRouter}>
      <div className="recipe-image">
        <img src={image_url} alt="Recipe" />
        <p className="recipe-price">&#8377;{price}</p>
      </div>
      <div className="recipe-details">
        <h2>{title.slice(0, 70)}...</h2>
        <p>By: {publisher.slice(0, 20)}...</p>
        <button
          className={`bookmark ${isBookmarked ? "active" : ""}`}
          onClick={handleBookmark}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
