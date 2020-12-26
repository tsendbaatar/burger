import React from "react";
import css from "./style.module.css";

const Hamburger = (props) => {
  return (
    <div onClick={props.toggleSideBar} className={css.HamburgerMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Hamburger;
