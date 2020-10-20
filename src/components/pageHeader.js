import React from "react";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <div className="PageHeader relative">
      <div className="BackgroundImage"></div>
      <div className="container text-left col-lg-10 mx-auto">
        <h1 className="PageHeader--Title">Loco Starter</h1>
        <h2 data-scroll data-scroll-speed="1">
          Bootstrap // Keen Slider // Locomotive.js // React Reveal
        </h2>
        <p data-scroll data-scroll-speed="2">
          Bust this open likea Pinata
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
