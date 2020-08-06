import {combineReducers} from "@reduxjs/toolkit";
import productReducer from "../product/product";

export default combineReducers({
  product: productReducer
});
