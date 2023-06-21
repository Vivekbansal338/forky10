import { useState } from "react";
import "./SearchSectionLeft.css";
import { searchResultsActions } from "@/store/searchresults";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function SearchSectionLeft() {
  const options = useSelector((state) => state.searchdata.publishers);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");

  const handleclick = (option) => {
    setSelectedOption(option);
    dispatch(searchResultsActions.filterByPublisher(option));
  };

  return (
    <div className="searchsectionleftsidebar">
      <div className="title_container">
        <h1 className="title_left_sidesection">Filter By Publishers</h1>
      </div>
      <ul className="filteroptions">
        <li
          className={`${selectedOption === "All" ? "selected" : ""}`}
          key={"All"}
          name={"All"}
          onClick={() => handleclick("All")}
        >
          All
        </li>
        {options.map((option, index) => {
          return (
            <li
              className={`${selectedOption === option ? "selected" : ""}`}
              key={index}
              name={option}
              onClick={() => handleclick(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchSectionLeft;
