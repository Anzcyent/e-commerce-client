import React from "react";
import { CartItem, CartSummary } from "../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";

const CartContainer = () => {
  const navigate = useNavigate();
  const { cart, loading, total } = useSelector((state) => state.cartReducer);

  if (loading)
    return (
      <main className="grow p-3 flex justify-center items-center md:flex-row flex-col font-urbanist">
        <PuffLoader color="#4c3398" />
      </main>
    );

  return (
    <main className="grow p-3 flex md:flex-row flex-col font-urbanist">
      <div className="md:w-1/2 w-full flex flex-col">
        {cart?.products?.map((product) => (
          <CartItem key={product._id} cartId={cart._id} product={product} />
        ))}

        <button
          onClick={() => navigate("/")}
          className="self-start bg-biceBlue text-white px-3 py-1 hover-and-scale"
        >
          Return Shopping
        </button>
      </div>

      <div className="md:w-1/2 w-full">
        <CartSummary total={total} />
      </div>
    </main>
  );
};

export default CartContainer;
