import React from "react";
import "./Searchicons.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { searchResultsActions } from "@/store/searchresults";
import { useCallback } from "react";

function SearchIcons(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { name, icon_url } = props;

  const handlerouter = useCallback(
    async (name) => {
      router.push("/searchresults");

      const apiUrl = `https://forkify-api.herokuapp.com/api/search?q=${name}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.error) {
          console.log("An error occurred:", data.error);
          return;
        }
        dispatch(searchResultsActions.setSearchResults(data.recipes));
      } catch (error) {
        console.log("An error occurred:", error);
      }
    },
    [dispatch]
  );

  return (
    <div className="Searchicons" onClick={() => handlerouter(name)}>
      <div className="imagesection">
        <img src={icon_url} alt="Image Description" />
      </div>
      <div className="namesection">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default SearchIcons;
