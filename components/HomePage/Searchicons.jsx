import React from "react";
import "./Searchicons.css";
import Image from "next/image";

function SearchIcons(props) {
  const { name, icon_url } = props;
  return (
    <div className="Searchicons">
      <a href="#">
        <Image
          src="/assets/Vegetables/carrot.png"
          width="200"
          height="200"
          alt={name}
        />
        <img src="/favicon.ico" alt={name} />
        <div className="name">{name}</div>
      </a>
    </div>
  );
}

export default SearchIcons;
