import React from "react";
import Hamburger from "../Hamburger";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <div>
      <Hamburger toggleSideBar={props.toggleSideBar}></Hamburger>
    </div>
    <div>
      <Logo></Logo>
    </div>
    <nav className={css.HideOnMobile}>
      <Menu></Menu>
    </nav>
  </header>
);

export default Toolbar;
