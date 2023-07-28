import React from "react";
import { CartItem, CartSummary } from "../components";

const CartContainer = () => {
  return (
    <main className="grow p-3 flex md:flex-row flex-col font-urbanist">
      <div className="md:w-1/2 w-full flex flex-col">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="md:w-1/2 w-full">
        <CartSummary />
      </div>
    </main>
  );
};

export default CartContainer;
