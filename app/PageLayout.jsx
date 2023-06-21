"use client";
import "./outer.css";
import NavigationBar from "@/components/sidebars/NavigationBar";
import Cart from "@/components/sidebars/Cart";
import Header from "@/components/layouts/Header";
import React from "react";
import { useState } from "react";
import Footer from "@/components/layouts/footer";

function PageLayout({ children }) {
  const [shownavbar, setshownavbar] = useState(true);
  const [showcart, setshowcart] = useState(true);

  const handleShowNavBar = () => {
    // e.preventDefault();
    setshownavbar((prev) => !prev);
  };
  const handleShowCart = () => {
    // e.preventDefault();
    setshowcart((prev) => !prev);
  };
  return (
    <section>
      <Header onshownavbar={handleShowNavBar} onshowcart={handleShowCart} />
      <div className="mainbody">
        {/* <div className="sidebarleft">left-sidebar</div> */}
        <main className="middle">{children}</main>
        {/* <div className="sidebarright">right-sidebar</div> */}
      </div>
      <Footer />
      <NavigationBar ishidden={shownavbar} onshownavbar={handleShowNavBar} />
      <Cart ishidden={showcart} onshowcart={handleShowCart} />
    </section>
  );
}

export default PageLayout;
