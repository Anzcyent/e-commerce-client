import React from "react";

const CartSummary = ({total}) => {
  const discount = 3;
  return (
    <section className="flex items-center justify-center h-full md:mt-0 mt-5">
      <div className="shadow-lg border-2 w-full text-2xl flex flex-col items-center p-5 rounded-lg">
        <span className="mb-5">
          Taxes: <span className="font-bold text-lightBlue">4%</span>
        </span>
        <span className="mb-5">
          Discount: <span className="font-bold text-lightBlue">{discount}%</span>
        </span>
        <span>
          Total: <span className="text-darkBlue font-bold">${Math.floor(total) - (Math.floor(total) * discount / 100)}</span>
        </span>
      </div>
    </section>
  );
};

export default CartSummary;
