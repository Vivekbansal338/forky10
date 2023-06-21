import React from "react";
import "./DetailCooking.css";

function DetailCooking(props) {
  return (
    <div className="hero_recipe_detail_cooking">
      <h2>HOW TO COOK IT</h2>
      <p>
        This recipe was carefully designed and tested by
        <span>Master Chef</span>. Please check out directions at their website.
      </p>
      <a
        href={props.elementdetails.source_url}
        target="_blank"
        className="Direction__button"
      >
        Directions
      </a>
    </div>
  );
}

export default DetailCooking;
