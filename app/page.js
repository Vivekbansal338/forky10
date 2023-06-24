"use client";
import React from "react";
import "@/styles/home.css";
import SearchIcons from "@/components/HomePage/Searchicons";
import { useSelector } from "react-redux";
import { useRef } from "react";

function Home() {
  const searchitemsdata = useSelector((state) => state.searchitems.data);
  const Vegetablesdata = searchitemsdata[0];
  const fruitsdata = searchitemsdata[1];
  const dishandfooddata = searchitemsdata[2];
  const herbsandspeciesdata = searchitemsdata[3];
  const Legumesandbeansdata = searchitemsdata[4];
  const meatandpoultrydata = searchitemsdata[5];

  const targetRef = useRef(null);

  const handleGetStarted = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to the World of Millions of Food Recipes</h1>
          <p>Discover delicious and healthy recipes for every occasion.</p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
      {/* <div className="discount">
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
      </div> */}
      <div className="popular fourth" ref={targetRef} id="target-section">
        <h2>Herbes and Species Recipes</h2>
        <div className="popular-items_container">
          <div className="popular_items">
            {herbsandspeciesdata.items.map((item) => (
              <SearchIcons name={item.name} icon_url={item.url} />
            ))}
          </div>
        </div>
      </div>
      <div className="productshowcantainer1">
        <div className="popular1 second">
          <h2>Vegetable-Based Recipes</h2>
          <div className="popular-items_container1">
            <div className="popular_items1">
              {Vegetablesdata.items.map((item) => (
                <SearchIcons name={item.name} icon_url={item.url} />
              ))}
            </div>
          </div>
        </div>
        <div className="popular1 first">
          <h2>Fruit-Based Recipes</h2>
          <div className="popular-items_container1">
            <div className="popular_items1">
              {fruitsdata.items.map((item) => (
                <SearchIcons name={item.name} icon_url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="productshowcantainer2">
        <div className="popular2 first">
          <h2>Dishes and Food Recipes</h2>
          <div className="popular-items_container2">
            <div className="popular_items2">
              {dishandfooddata.items.map((item) => (
                <SearchIcons name={item.name} icon_url={item.url} />
              ))}
            </div>
          </div>
        </div>
        <div className="popular2 second">
          <h2>Meat and Poultry Recipes</h2>
          <div className="popular-items_container2">
            <div className="popular_items2">
              {meatandpoultrydata.items.map((item) => (
                <SearchIcons name={item.name} icon_url={item.url} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="popular third">
        <h2>Legumes and Beans Recipes</h2>
        <div className="popular-items_container">
          <div className="popular_items">
            {Legumesandbeansdata.items.map((item) => (
              <SearchIcons name={item.name} icon_url={item.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
