import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { fetchDeleteItemInCart } from "../utils/fetch";

const CartItem = ({ cartId, product }) => {
  const dispatch = useDispatch();
  return (
    <section className="flex mb-[5rem]">
      <div className="w-1/6 mr-5">
        <img src={product.image} className="w-full" alt="Image" />
      </div>
      <div className="w-5/6">
        <span className="font-bold">{product.title}</span>
        <p>{product.description}</p>
        <hr className="my-3 w-1/3" />
        <div className="flex flex-col">
          <span>
            Quantity: <span className="font-bold">{product.quantity}</span>
          </span>
          <span className="text-darkBlue font-bold">${product.price}</span>
          <button
            onClick={() => dispatch(fetchDeleteItemInCart(cartId, product._id))}
            className="hover-and-scale w-[40px] p-1 flex justify-center items-center"
          >
            <BsFillTrashFill className="text-tomato mt-2 text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
