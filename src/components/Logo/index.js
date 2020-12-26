import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/images/burger-logo.png";

const Logo = () => (
  <div className={css.Logo}>
    <img alt="logo" src={logoImage}></img>
  </div>
);

export default Logo;
