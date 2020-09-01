import React, { Component } from "react";
import carousel1 from "../Assets/carasoul.jpg";
import carousel2 from "../Assets/carasoul2.jpg";
export default class Carasoul extends Component {
  render() {
    return (
      <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img
                src={carousel1}
                alt="carousel1"
                style={{ width: "1350px", height: "400px" }}
              />
              <div className="carousel-caption">
                <h3>Sell $</h3>
                <p>Money Money.</p>
              </div>
            </div>

            <div className="item">
              <img
                src={carousel2}
                style={{ width: "1350px", height: "400px" }}
                alt="carousel2"
              />
              <div className="carousel-caption">
                <h3>More Sell $</h3>
                <p>Lorem ipsum...</p>
              </div>
            </div>
          </div>

          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
