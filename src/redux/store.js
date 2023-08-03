import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    categoryReducer,
    productReducer,
    cartReducer,
    orderReducer,
  },
  middleware: [thunk],
});

export default store;
