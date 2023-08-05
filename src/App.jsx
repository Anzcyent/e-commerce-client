import React, { useEffect } from "react";
import {
  Home,
  Login,
  Register,
  NotFound,
  Cart,
  Product,
  Order,
  Orders,
} from "./pages";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { fetchCart } from "./utils/fetch";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { user, accessToken } = useSelector((state) => state.authReducer);

  const cartId = localStorage.getItem("cartId");

  useEffect(() => {
    if (cartId) dispatch(fetchCart(cartId));
  }, [cartId]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route
        exact
        path="/login"
        element={user._id ? <Navigate to="/" /> : <Login />}
      />
      <Route
        exact
        path="/register"
        element={user._id ? <Navigate to="/" /> : <Register />}
      />
      <Route exact path="/order/:id" element={<Order />} />
      <Route
        exact
        path="/orders"
        element={accessToken ? <Orders /> : <Navigate to="/" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
