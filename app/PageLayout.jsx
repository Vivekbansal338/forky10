"use client";
import "./outer.css";
import NavigationBar from "@/components/sidebars/NavigationBar";
import Cart from "../components/sidebars/Cart";
import Header from "../components/layouts/Header";
import React from "react";
import { useState } from "react";
import Footer from "../components/layouts/footer";

function PageLayout({ children }) {
  const [shownavbar, setshownavbar] = useState(true);
  const [showcart, setshowcart] = useState(true);
  const [cartcount, setcartcount] = useState(0);

  const handleShowNavBar = () => {
    // e.preventDefault();
    setshownavbar((prev) => !prev);
  };
  const handleShowCart = () => {
    // e.preventDefault();
    setshowcart((prev) => !prev);
  };

  const handlecartcount = (count) => {
    setcartcount(count);
  };

  return (
    <section>
      <Header
        onshownavbar={handleShowNavBar}
        onshowcart={handleShowCart}
        cartcount={cartcount}
      />
      <div className="mainbody">
        <main className="middle">{children}</main>
      </div>
      <Footer />
      <NavigationBar ishidden={shownavbar} onshownavbar={handleShowNavBar} />
      <Cart
        ishidden={showcart}
        onshowcart={handleShowCart}
        handlecartcount={handlecartcount}
      />
    </section>
  );
}

export default PageLayout;
