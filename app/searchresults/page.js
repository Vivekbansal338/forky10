"use client";
import React from "react";
import "./page.css";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { useSelector } from "react-redux";
import SearchSectionRight from "@/components/SearchSectionSidebars/SearchSectionRight";
import SearchSectionLeft from "@/components/SearchSectionSidebars/SearchSectionLeft";

function SearchResults() {
  const searchResults = useSelector((state) => state.searchdata.data);

  return (
    <div className="search_results_body">
      <div className="search_result_leftsidebar">
        <SearchSectionLeft />
      </div>
      <div className="search_results_container">
        {searchResults.map((item) => (
          <RecipeCard key={item.recipe_id} data={item} />
        ))}
      </div>
      <div className="search_result_rightsidebar">
        <SearchSectionRight />
      </div>
    </div>
  );
}

export default SearchResults;
