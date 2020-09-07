import React from "react";
import data from "../component/DATA";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { cartItems } from "../actions";
import { notify } from "react-notify-toast";

function Item(props) {
  console.log("props", props);

  //console.log("props.match.params.id", props.match.params.id);

  //const details = data.filter((key) => key.id == props.match.params.id);

  const details = data.filter((key) => {
    //console.log("key.id", key.id);
    //console.log("props.match.params.id", props.match.params.id);

    return key.id === parseInt(props.match.params.id);
  });

  console.log("details", details);

  let id = parseInt(details[0].id);
  let name = details[0].name;
  let description = details[0].description;
  let price = details[0].price;
  let img = details[0].img;
  let units = 1;
  let finalPrice = details[0].price;

  // const ItemDetails = Object.assign({}, details);
  //console.log("details", details[0].id);

  return (
    <div className="container">
      <div className="col-sm-12" style={{ margin: "5px" }}>
        <div className="card" style={{ width: "50rem", padding: "5px" }}>
          <img
            className="img-thumbnail"
            src={`/Assets/${img}`}
            alt={name}
            style={{ width: "25rem", height: "25rem" }}
          />

          <div className="card-body">
            <hr />
            <p className="card-text">Price : ₹ {price}</p>

            <hr />
            <p> {details[0].description}</p>
            <hr />

            <button
              className="btn btn-primary"
              style={{ width: "50%" }}
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
                notify.show(
                  `${name} added to Cart!`,
                  "success",
                  1000,
                  "#FFFFFF"
                );
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Item);
