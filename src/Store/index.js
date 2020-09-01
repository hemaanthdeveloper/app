import { createStore, applyMiddleware } from "redux";
// import promiseMiddleware from "redux-promise";

import { logger } from "redux-logger";
import reducers from "../Reducers";

const store = createStore(reducers, applyMiddleware(logger));

export default store;
