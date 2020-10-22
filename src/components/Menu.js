import React from "react";
import PropTypes from "prop-types";

// React Component
import Burger from "@animated-burgers/burger-squeeze";
// don't forget the styles
import "@animated-burgers/burger-squeeze/dist/styles.css";
import Nav from "./Nav";

const Menu = () => {
  return (
    <div>
      <Burger />

      <Burger isOpen={true} />

      <Burger direction="right" />

      <Burger Component="button" type="button" />

      <button className="burger" type="button">
        <div className="burger-lines" />
      </button>
    </div>
  );
};

export default Menu;
