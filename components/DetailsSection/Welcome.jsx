import React from "react";
import "./Welcome.css";
function Welcome() {
  return (
    <div className="initial_message">
      <img
        src="https://i.ibb.co/k8Y49kM/meal-1.jpg"
        alt="Recipe 1"
        data-aos="fade-down"
      />
      <h2 data-aos="fade-up">Welcome to the Recipe App!</h2>
      <p data-aos="fade-up">Please select a recipe to view its details.</p>
    </div>
  );
}

export default Welcome;
