import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    categoryReducer,
  },
  middleware: [thunk],
});

export default store;
