import { combineReducers } from "redux";
import { CartItems } from "./CartItems";

const rootReducers = combineReducers({
  items: CartItems,
});

export default rootReducers;
