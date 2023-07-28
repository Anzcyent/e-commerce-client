import React from "react";
import {BsFillTrashFill} from "react-icons/bs"

const CartItem = () => {
  return (
    <section className="flex mb-5">
      <div className="w-1/6 mr-5">
        <img
          src="https://m.media-amazon.com/images/I/51Upw655zvL._AC_UF1000,1000_QL80_.jpg"
          className="w-full"
          alt="Image"
        />
      </div>
      <div className="w-5/6">
        <span className="font-bold">Wireless Earbuds</span>
        <p>Enjoy the freedom of wireless music with these earbuds.</p>
        <hr className="my-3 w-1/3" />
        <div className="flex flex-col">
          <span>
            Quantity: <span className="font-bold">3</span>
          </span>
          <span className="text-darkBlue font-bold">$79.99</span>
          <button className="hover-and-scale w-[40px] p-1 flex justify-center items-center">
            <BsFillTrashFill className="text-tomato mt-2 text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
