import React from "react";
import { CartItem, CartSummary } from "../components";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigate = useNavigate();
  return (
    <main className="grow p-3 flex md:flex-row flex-col font-urbanist">
      <div className="md:w-1/2 w-full flex flex-col">
        <CartItem />
        <CartItem />
        <CartItem />
        <button onClick={() => navigate("/")} className="self-start bg-biceBlue text-white px-3 py-1 hover-and-scale">Return Shopping</button>
      </div>

      <div className="md:w-1/2 w-full">
        <CartSummary />
      </div>
    </main>
  );
};

export default CartContainer;
