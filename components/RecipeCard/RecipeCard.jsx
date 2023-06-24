"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./RecipeCard.css";
import { useSelector } from "react-redux";
import { db } from "@/app/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import {
  addBookmark,
  removeBookmark,
} from "@/firestorefunctions/allfunctionsnew";

function RecipeCard(props) {
  const router = useRouter();
  const { image_url, publisher, recipe_id, title, price } = props.data;
  const [alreadyBookmarked, setAlreadyBookmarked] = useState(false);
  const user = useSelector((state) => state.userauth.user);

  useEffect(() => {
    const checkIfBookmarked = async (user, recipe_id) => {
      if (user) {
        const bookmarkDocRef = doc(
          db,
          "users",
          user.uid,
          "bookmarkdata",
          recipe_id
        );
        const docSnapshot = await getDoc(bookmarkDocRef);
        setAlreadyBookmarked(docSnapshot.exists());
      } else {
        setAlreadyBookmarked(false);
      }
    };

    checkIfBookmarked(user, recipe_id);
  }, [user, recipe_id]);

  const handleRouter = (e) => {
    e.preventDefault();
    router.push(`/searchresults/${recipe_id}`);
  };

  const handleBookmark = async (e) => {
    e.stopPropagation();
    if (user) {
      if (alreadyBookmarked) {
        await removeBookmark(user.uid, recipe_id);
        setAlreadyBookmarked(false);
      } else {
        await addBookmark(user.uid, props.data, recipe_id);
        setAlreadyBookmarked(true);
      }
    } else {
      router.push("/login");
    }
  };
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
          className={`bookmark ${alreadyBookmarked ? "alreadybookmarked" : ""}`}
          onClick={handleBookmark}
        >
          {alreadyBookmarked ? "Bookmarked" : "Bookmark"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
