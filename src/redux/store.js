import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import authReducer from "./authSlice";
import searchReducer from "./searchSlice";
import toastReducer from "./toastSlice";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    categoryReducer,
    productReducer,
    cartReducer,
    orderReducer,
    searchReducer,
    toastReducer,
    authReducer: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
