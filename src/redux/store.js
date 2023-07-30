import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    categoryReducer,
    productReducer,
  },
  middleware: [thunk],
});

export default store;
