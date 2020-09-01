import React from "react";
import Product from "../container/Product";
import DATA from "./DATA";
// import CartList from "./cart/CartList";

export default function Fruits() {
  console.log("DATA", DATA);
  const veg = DATA.filter((key) => key.tags.includes("fruits"));

  return (
    // <div className="container">
    <div className="container-fluid text-center">
      <div className="row content">
        <div className="col-sm-2 sidenav"></div>
        <div className="col-sm-9 text-left">
          {/* <div class="card-deck card-columns"> */}
          {veg.map((item) => (
            <Product key={item.id} {...item} />
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
