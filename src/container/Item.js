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
    <div className="container-fluid text-center">
      <div className="row content">
        <div className="col-sm-5 sidenav">
          {
            <img
              src={`/Assets/${details[0].img}`}
              alt={details.name}
              style={{
                float: "left",
                height: "100%",
                width: "80%",
              }}
            />
          }
        </div>
        <div className="col-sm-7 sidenav" style={{ border: "1px solid black" }}>
          <h1>{details[0].name}</h1>
          <hr />
          <p>₹ : {details[0].price}</p>
          <hr />
          <p> {details[0].description}</p>
          <hr />
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
              notify.show(`${name} added to Cart!`, "success", 1000, "#FFFFFF");
            }}
          >
            Add to Cart
          </button>
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
