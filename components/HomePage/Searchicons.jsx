import React from "react";
import "./Searchicons.css";

function SearchIcons(props) {
  const { name, icon_url } = props;
  return (
    <div className="Searchicons">
      <a href="#">
        <img src="/artichoke.png" alt={name} />
        <img src="/favicon.ico" alt={name} />
        <div className="name">{name}</div>
      </a>
    </div>
  );
}

export default SearchIcons;
