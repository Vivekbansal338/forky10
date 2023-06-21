"use client";
import React from "react";
import "./DetailIngredients.css";
import { AiOutlineCheck } from "react-icons/ai";

function DetailIngredients(props) {
  const ingredients = props.elementdetails.ingredients;
  return (
    <div className="hero_recipe_detail_ingredients">
      <h2>RECIPE INGREDIENTS</h2>
      <ul className="Recipe_ingredents_list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <AiOutlineCheck className="icon" />
            <p>{ingredient}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailIngredients;
