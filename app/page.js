"use client";
import React from "react";
import "./Page.css";
import SearchIcons from "@/components/HomePage/Searchicons";
import { useSelector } from "react-redux";

function Home() {
  const searchitemsdata = useSelector((state) => state.searchitems.data);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Food Recipes</h1>
          <p>Discover delicious and healthy recipes for every occasion.</p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="discount">
        <h2>Get 10% off your first order</h2>
        <p>Use code FOOD10 at checkout</p>
      </div>
      <div className="trending">
        <h2>Trending Recipes</h2>
        <div className="trending-items">
          <div className="trending-item">
            <img src="pizza.jpg" alt="Pizza" />
            <h3>Pizza</h3>
          </div>
          <div className="trending-item">
            <img src="mango.jpg" alt="Mango" />
            <h3>Mango Smoothie</h3>
          </div>
          <div className="trending-item">
            <img src="apple.jpg" alt="Apple" />
            <h3>Apple Pie</h3>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <h2>Our Recommendations</h2>
        <div className="recommendation-items">
          <div className="recommendation-item">
            <img src="salad.jpg" alt="Salad" />
            <h3>Healthy Salad</h3>
          </div>
          <div className="recommendation-item">
            <img src="smoothie.jpg" alt="Smoothie" />
            <h3>Green Smoothie</h3>
          </div>
          <div className="recommendation-item">
            <img src="soup.jpg" alt="Soup" />
            <h3>Chicken Soup</h3>
          </div>
        </div>
      </div>
      <div className="popular">
        <h2>Popular Recipes</h2>
        <div className="popular-items">
          <div className="popular-item">
            <img src="pizza.jpg" alt="Pizza" />
            <h3>Pizza</h3>
          </div>
          <div className="popular-item">
            <img src="mango.jpg" alt="Mango" />
            <h3>Mango Smoothie</h3>
          </div>
          <div className="popular-item">
            <img src="apple.jpg" alt="Apple" />
            <h3>Apple Pie</h3>
          </div>
        </div>
      </div>
      <SearchIcons
        name="apple"
        icon_url={"../assets/Vegetables/asparagus.png"}
      />
    </div>
  );
}

export default Home;
