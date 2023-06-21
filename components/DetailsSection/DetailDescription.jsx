import React from "react";
import "./DetailDescription.css";

function DetailDescription(props) {
  const { publisher, title, image_url } = props.elementdetails;
  const price = image_url.length || 100;
  return (
    <div className="detail-description">
      <h2 className="detail-description__title">{title}</h2>
      <p className="detail-description__publisher">By : {publisher}</p>
      <p className="detail-description__price">Special Price: &#8377;{price}</p>
    </div>
  );
}

export default DetailDescription;
