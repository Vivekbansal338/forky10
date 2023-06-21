"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import "./page.css";
import { usePathname } from "next/navigation";
import DetailImg from "@/components/DetailsSection/DetailImg";
import DetailIngredients from "@/components/DetailsSection/DetailIngredients";
import DetailDescription from "@/components/DetailsSection/DetailDescription";
import DetailAction from "@/components/DetailsSection/DetailAction";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { useSelector } from "react-redux";

function Details(props) {
  const [clickedelementdetails, setClickedelementdetails] = useState("");
  const [datafetched, setDatafetched] = useState(false);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];
  const searchdata = useSelector((state) => state.searchdata.permanentdata);
  const filtersearchdata = searchdata.filter((item) => item.recipe_id != id);

  useEffect(() => {
    const apiUrl = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setClickedelementdetails(data.recipe);
        // console.log(data.recipe);
        setDatafetched(true);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }, []);

  return (
    <div className="hero_recipe_detail_container">
      <div className="recipe_detail_sidebar">
        {filtersearchdata.map((item) => (
          <RecipeCard key={item.recipe_id} data={item} />
        ))}
      </div>
      <div className="hero_recipe_detail ">
        {datafetched && <DetailImg elementdetails={clickedelementdetails} />}
        {datafetched && (
          <DetailDescription elementdetails={clickedelementdetails} />
        )}
        {datafetched && <DetailAction elementdetails={clickedelementdetails} />}
        {datafetched && (
          <DetailIngredients elementdetails={clickedelementdetails} />
        )}
      </div>
    </div>
  );
}

export default Details;
