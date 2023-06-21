"use client";
import { cartActions } from "../../store/cart";
import { BookmarkActions, selectIsBookmarked } from "../../store/bookmark";
import { useState } from "react";
import React from "react";
import "./DetailAction.css";

import { useDispatch, useSelector } from "react-redux";

function DetailAction(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userauth.user);
  const [alreadybookmarked, setAlreadyBookmarked] = useState(false);

  function handleaddtocart() {
    dispatch(
      cartActions.addtocart({
        uid: user.uid,
        data: props.elementdetails,
      })
    );
  }

  function handlebookmark() {
    dispatch(
      BookmarkActions.toggleBookmarks({
        uid: user.uid,
        data: props.elementdetails,
      })
    );
    setAlreadyBookmarked(!alreadybookmarked);
  }

  return (
    <div className="detail-action">
      <button className="detail-action__button" onClick={handleaddtocart}>
        Add to Cart
      </button>
      <button className="detail-action__button" onClick={handlebookmark}>
        {alreadybookmarked ? "Bookmarked" : "Bookmark"}
      </button>
    </div>
  );
}

export default DetailAction;
