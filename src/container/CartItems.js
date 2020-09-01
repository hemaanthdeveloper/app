import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { cartItems } from "../actions";

const CartItem = (props) => {
  console.log("props", props);
  const { id, name, description, finalPrice, img, price, units } = props;
  return (
    <tr>
      {/* <th scope="row">{id}</th> */}
      <td>{name}</td>
      <td>{description}</td>
      <td>{finalPrice}</td>
      <td>
        <img
          src={`/Assets/${img}`}
          alt="sample"
          style={{ height: "100px", width: "100px" }}
        />
      </td>
      <td>
        <button
          className="btn btn-primary btn-xs"
          style={{ height: "25px", width: "25px" }}
          onClick={() => {
            props.dispatch(
              cartItems("DECREMENT_FROM_CART", {
                id,
                name,
                description,
                price,
                img,
                units,
              })
            );
          }}
        >
          -
        </button>
        <span>
          {"       "} {units} {"       "}
        </span>
        <button
          className="btn btn-primary btn-xs"
          style={{ height: "25px", width: "25px" }}
          onClick={() => {
            props.dispatch(
              cartItems("ADD_TO_CART", {
                id,
                name,
                description,
                price,
                img,
                units,
              })
            );
          }}
        >
          +
        </button>
      </td>
      <td>
        <button
          className="btn btn-primary "
          style={{ width: "50%" }}
          onClick={() => {
            props.dispatch(
              cartItems("REMOVE_FROM_CART", {
                id,
                name,
                description,
                price,
                img,
                units,
              })
            );
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(CartItem);
