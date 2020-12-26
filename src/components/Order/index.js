import React from "react";
//import Spinner from "../../components/General/Spinner";
import css from "./style.module.css";
//import axios from "../../axios-orders";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах : {props.order.ingredients.bacon}, Салад :{" "}
        {props.order.ingredients.salad}, Үхрийн мах :{" "}
        {props.order.ingredients.meat}, Бяслаг :{" "}
        {props.order.ingredients.cheese}
      </p>
      <p>
        Хаяг : {props.order.address.name} | {props.order.address.street} |
        {props.order.address.city}
      </p>
      <p>
        Үнийн дүн : <strong>{props.order.price}₮</strong>
      </p>
    </div>
  );
};

export default Order;
