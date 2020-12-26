import React from "react";
import Shadow from "../Shadow";
import css from "./style.module.css";

const modal = (props) => (
  <div>
    <Shadow show={props.show} clickClose={props.closeConfirmModal} />
    <div
      //onClick={props.closeConfirmModal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={css.Modal}
    >
      {props.children}
    </div>
  </div>
);

export default modal;
