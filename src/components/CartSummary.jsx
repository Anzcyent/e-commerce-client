import React, { useState } from "react";
import StripeCheckOut from "react-stripe-checkout";

const CartSummary = ({ total }) => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const discount = 3;
  return (
    <section className="flex items-center justify-center h-full md:mt-0 mt-5">
      <div className="shadow-lg border-2 w-full text-2xl flex flex-col items-center p-5 rounded-lg">
        <span className="mb-5">
          Taxes: <span className="font-bold text-lightBlue">4%</span>
        </span>
        <span className="mb-5">
          Discount:{" "}
          <span className="font-bold text-lightBlue">{discount}%</span>
        </span>
        <span className="mb-5">
          Total:{" "}
          <span className="text-darkBlue font-bold">
            ${Math.floor(total) - (Math.floor(total) * discount) / 100}
          </span>
        </span>

        <StripeCheckOut
          name="ShopEazy"
          image="https://media.istockphoto.com/id/157308559/tr/foto%C4%9Fraf/money-pile-100-dollar-bills.jpg?s=612x612&w=0&k=20&c=48StwAO8TerBkLxDUBn5WCSr4BHYb1ov1Sg67VIcup0="
          billingAddress
          shippingAddress
          description={`Your total is $${(Math.floor(total) - (Math.floor(total) * discount) / 100)}`}
          amount={(Math.floor(total) - (Math.floor(total) * discount) / 100) * 100}
          token={onToken}
          stripeKey="pk_test_51NUTNoHBvpeGrdzgigkOVnUi6rg8IzthW3dwQgEYsWClcRFi9W2LEUMGRiawA7G8YqU3eNxeoA6uqAKjg3D57Mmk00nfsfHDWO"
        >
          <button className="bg-darkBlue text-white px-3 py-1 hover-and-scale">
            CHECKOUT NOW
          </button>
        </StripeCheckOut>
      </div>
    </section>
  );
};

export default CartSummary;
