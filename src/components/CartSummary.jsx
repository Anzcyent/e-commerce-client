import React from "react";

const CartSummary = () => {
  return (
    <scetion className="flex items-center justify-center h-full">
      <div className="shadow-lg border-2 w-full text-2xl flex flex-col items-center p-5 rounded-lg">
        <span className="mb-5">
          Taxes: <span className="font-bold text-lightBlue">4%</span>
        </span>
        <span className="mb-5">
          Discount: <span className="font-bold text-lightBlue">7%</span>
        </span>
        <span>
          Total: <span className="text-darkBlue font-bold">$259.97</span>
        </span>
      </div>
    </scetion>
  );
};

export default CartSummary;
