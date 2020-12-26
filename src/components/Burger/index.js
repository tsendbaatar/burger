import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
const Burger = (props) => {
  const items = Object.entries(props.orts);

  let content = [];

  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
  });

  if (content.length === 0)
    content = <p>Хачиртай талхны орцийг сонгоно уу ...</p>;

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orts: state.burgerReducer.ingredients,
  };
};
export default connect(mapStateToProps)(withRouter(Burger));
