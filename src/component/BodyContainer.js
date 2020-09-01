import React, { Component } from "react";
import veg from "../Assets/Vegitables.jpg";
import fruits from "../Assets/fruits.jpg";
import dairy from "../Assets/Dairy.jpg";
import eggs from "../Assets/eggs.jpg";
import { Link } from "react-router-dom";

export default class BodyContainer extends Component {
  render() {
    return (
      <div className="container text-center" id="bodycontainerradius">
        <h2>Shop by Categories</h2>
        <h3>Unlimited Choices. Unbeatable Prices. Free Shipping.</h3>
        <div className="row">
          <div className="col-sm-3">
            <Link to="/vegetables">
              <img
                id="imagewidth"
                src={veg}
                className="img-responsive"
                alt="veg"
              />
            </Link>
            <p>Vegetables</p>
          </div>
          <div className="col-sm-3">
            <Link to="/fruits">
              <img
                id="imagewidth"
                src={fruits}
                className="img-responsive"
                alt="fruits"
              />
            </Link>
            <p>Fruits</p>
          </div>
          <div className="col-sm-3">
            <Link to="/dairy">
              <img
                id="imagewidth"
                src={dairy}
                className="img-responsive"
                alt="fruits"
              />
            </Link>
            <p>Dairy</p>
          </div>
          <div className="col-sm-3">
            <img
              src={eggs}
              className="img-responsive"
              id="imagewidth"
              alt="eggs"
            />
            <p>Eggs</p>
          </div>
        </div>
      </div>
    );
  }
}
