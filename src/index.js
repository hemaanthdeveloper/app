import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./component/Routing";

import store from "./Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
