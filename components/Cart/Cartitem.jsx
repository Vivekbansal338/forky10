"use client";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import React, { useState } from "react";
import "./cartitem.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  addtocart,
  removefromcart,
} from "@/firestorefunctions/allfunctionsnew";

function Cartitem(props) {
  const user = useSelector((state) => state.userauth.user);
  const uid = user ? user.uid : null;
  const router = useRouter();
  const { image_url, title, price, quantity, recipe_id } = props.item;

  const handleadditem = (e) => {
    e.preventDefault();
    const cartData = {
      ...props.item,
      price: parseFloat(props.item.image_url.length) || 100,
      quantity: 1,
    };
    addtocart(uid, cartData, recipe_id);
  };

  const handleremoveitem = (e) => {
    e.preventDefault();
    removefromcart(uid, recipe_id);
  };

  const handlerouter = (e) => {
    e.preventDefault();
    console.log("clicked");
    router.push(`/searchresults/${recipe_id}`);
  };

  return (
    <div className="cartitem">
      <div className="cartitem-image" onClick={handlerouter}>
        <img className="recipe_image" src={image_url} alt="Recipe" />
      </div>
      <div className="cartitem-details">
        <h2 className="recipe_title" onClick={handlerouter}>
          {title.slice(0, 20)}
        </h2>
        <p className="cartitem-price">Total : &#8377; {price * quantity}</p>
        <div className="cartitem-quantity">
          <button className="cartitem-button">
            <AiFillMinusCircle
              className="plusminusicon"
              onClick={handleremoveitem}
            />
          </button>
          <input
            type="number"
            className="cartitem-input"
            value={quantity}
            readOnly
          />
          <button className="cartitem-button">
            <AiFillPlusCircle
              className="plusminusicon"
              onClick={handleadditem}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
