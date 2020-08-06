import {configureStore} from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

export default function () {
  return configureStore({
    reducer,
  });
}
