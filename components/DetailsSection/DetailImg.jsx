"use client";
import React from "react";
import "./DetailImg.css";

function DetailImg(props) {
  return (
    <div className="hero_recipe_detail_img_container">
      <img
        className="hero_recipe_detail_img"
        src={props.elementdetails.image_url}
        alt={props.elementdetails.title}
      />
    </div>
  );
}

export default DetailImg;
