import React from "react";
import { Home, Login, Register, NotFound, Cart, Product } from "./pages";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route
        exact
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        exact
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
