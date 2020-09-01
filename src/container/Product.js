import React from "react";
import { connect } from "react-redux";
import { cartItems } from "../actions";
import PropTypes from "prop-types";

const Product = (props) => {
  const units = 1;
  const { id, name, description, price, img } = props;
  const finalPrice = price;
  return (
    <div className="col-sm-3" style={{ margin: "5px" }}>
      <div className="card" style={{ width: "25rem" }}>
        <img
          className="img-thumbnail"
          src={`/Assets/${img}`}
          alt={name}
          style={{ width: "25rem", height: "25rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{description}</h5>
          <p className="card-text">Price : ₹ {price}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              props.dispatch(
                cartItems("ADD_TO_CART", {
                  id,
                  name,
                  description,
                  price,
                  img,
                  units,
                  finalPrice,
                })
              );
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  dispatch: PropTypes.func,
};
const mapStateToProps = (state) => {
  console.log("state", state);
  return { myState: state };
};

export default connect(mapStateToProps)(Product);
