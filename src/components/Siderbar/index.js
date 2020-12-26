import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";
const SideBar = (props) => {
  let classes = [css.SideBar, css.Close];

  if (props.showSideBar) {
    classes = [css.SideBar, css.Open];
  }

  return (
    <div>
      <Shadow show={props.showSideBar} onClick={props.toggleSideBar}></Shadow>
      <div className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo></Logo>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
