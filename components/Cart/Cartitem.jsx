"use client";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import React, { useState } from "react";
import "./cartitem.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const recipetempData = {
  image_url:
    "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
  publisher: "101 Cookbooks",
  publisher_url: "http://www.101cookbooks.com",
  recipe_id: "47746",
  social_rank: 100,
  source_url: "http://www.101cookbooks.com/archives/001199.html",
  title: "Best Pizza Dough Ever",
};
function Cartitem(props) {
  const uid = useSelector((state) => state.userauth.user.uid);
  const router = useRouter();
  const dispatch = useDispatch();
  const { image_url, title, price, quantity, recipe_id } = props.item;

  const handleadditem = (e) => {
    e.preventDefault();
    dispatch(cartActions.addtocart({ uid: uid, data: props.item }));
  };

  const handleremoveitem = (e) => {
    e.preventDefault();
    dispatch(cartActions.removefromcart({ uid: uid, data: props.item }));
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

          {/* <Link href={`/searchresults/`}>
            <span className="cartitem-check">Check</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
