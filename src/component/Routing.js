import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../container/Header";
import Vegetables from "./Vegetables";
import Footer from "./Footer";
import CartList from "../container/CartList";
import Fruits from "./Fruits";
import Dairy from "./Dairy";
import Item from "../container/Item";

import Home from "../container/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/vegetables" component={Vegetables}></Route>
      <Route exact path="/fruits" component={Fruits}></Route>
      <Route exact path="/dairy" component={Dairy}></Route>
      <Route exact path="/cart" component={CartList}></Route>
      <Route path="/search/:id" component={Item}></Route>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
