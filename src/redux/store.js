import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    categoryReducer,
    productReducer,
    cartReducer,
  },
  middleware: [thunk],
});

export default store;
