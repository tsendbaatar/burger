import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>

      <p>
        <b>Захиалгын дүн: {props.price} төгрөг</b>
      </p>
      <p>Цаашаа үргэлжлүүлэх үү.</p>

      <Button
        clicked={props.onCancel}
        buttonType="Danger"
        text="Татгалзах"
      ></Button>
      <Button
        clicked={props.onContinue}
        buttonType="Success"
        text="Үргэлжлүүлэх"
      ></Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    ingredientNames: state.burgerReducer.ingredientName,
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(OrderSummary);
