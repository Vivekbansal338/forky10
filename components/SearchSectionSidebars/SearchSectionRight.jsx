import { useState } from "react";
import "./SearchSectionRight.css";
import { searchResultsActions } from "@/store/searchresults";
import { useDispatch } from "react-redux";

function SearchSectionRight() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === "Price: Low to high") {
      dispatch(searchResultsActions.sortByPriceAsc());
    } else if (option === "Price: High to low") {
      dispatch(searchResultsActions.sortByPriceDesc());
    }
  };

  return (
    <div className="sortby-container">
      <span className="sortby-label">Sort By</span>
      <ul className="sortby-options">
        <li
          className={`sortby-option ${
            selectedOption === "Relevance" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Relevance")}
        >
          Relevance
        </li>
        <li
          className={`sortby-option ${
            selectedOption === "Trending" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Trending")}
        >
          Trending
        </li>
        <li
          className={`sortby-option ${
            selectedOption === "Latest arrivals" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Latest arrivals")}
        >
          Latest arrivals
        </li>
        <li
          className={`sortby-option ${
            selectedOption === "Price: Low to high" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Price: Low to high")}
        >
          Price: Low to high
        </li>
        <li
          className={`sortby-option ${
            selectedOption === "Price: High to low" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Price: High to low")}
        >
          Price: High to low
        </li>
      </ul>
    </div>
  );
}

export default SearchSectionRight;
