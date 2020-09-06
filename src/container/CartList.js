import React from "react";
import CartItem from "./CartItems";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { cartItems } from "../actions";

function CartList({ items }) {
  // console.log("items", items);
  const handleSubmitRequest = (items) => {
    axios
      .post("http://localhost:5000/api/orders", {
        status: "ORDERED",
        orderdetails: items,
        userId: "5f33783915c4e0224caf93db",
      })
      .then((res) => {
        console.log("Response", res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Item Count</th>
            <th scope="col">Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((key1) => (
            <CartItem {...key1} key={key1.id} />
          ))}
        </tbody>
      </table>
      <div>Total : {Util(items)}</div>
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "150px" }}
          onClick={() => {
            handleSubmitRequest(items);
            cartItems("EMPTYCART", "");
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export function Util(array) {
  const listElements = array.map((element) => element.finalPrice);
  //console.log("listElements,", listElements);
  return listElements.map(Number).reduce((a, b) => a + b, 0);
}

CartList.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, cartItems)(CartList);
