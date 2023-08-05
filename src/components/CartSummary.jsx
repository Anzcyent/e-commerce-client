import React, { useState, useEffect } from "react";
import StripeCheckOut from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateOrder } from "../utils/fetch";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const CartSummary = ({ cart, total }) => {
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.authReducer);
  const cartId = localStorage.getItem("cartId");
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    if (stripeToken?.card) {
      const {
        address_line1,
        address_line2,
        address_city,
        address_country,
        address_zip,
        name,
      } = stripeToken.card;
      dispatch(
        fetchCreateOrder(
          {
            customerId: user._id ? user._id : undefined,
            customerName: user._id ? user.username : name,
            totalPrice:
              Math.round(total) - (Math.round(total) * discount) / 100,
            address: `${address_line1} ${
              address_line2 ? address_line2 : ""
            } ${address_city}/${address_country} ${address_zip}`,
            status: "OK",
            cart: cartId,
            products: cart.products,
          },
          navigate
        )
      );

      localStorage.removeItem("cartId");
      dispatch(clearCart());
    }
  }, [stripeToken]);

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
        <span className="mb-5 relative">
          Total:{" "}
          <span className="opacity-50 font-bold absolute right-[-50%] line-through">
            ${Math.round(total)}
          </span>
          <span className="text-darkBlue font-bold">
            ${Math.round(total) - (Math.round(total) * discount) / 100}
          </span>
        </span>

        <StripeCheckOut
          name="ShopEazy"
          image="https://media.istockphoto.com/id/157308559/tr/foto%C4%9Fraf/money-pile-100-dollar-bills.jpg?s=612x612&w=0&k=20&c=48StwAO8TerBkLxDUBn5WCSr4BHYb1ov1Sg67VIcup0="
          billingAddress
          shippingAddress
          description={`Your total is $${
            Math.round(total) - (Math.round(total) * discount) / 100
          }`}
          amount={
            (Math.round(total) - (Math.round(total) * discount) / 100) * 100
          }
          token={onToken}
          stripeKey="pk_test_51NUTNoHBvpeGrdzgigkOVnUi6rg8IzthW3dwQgEYsWClcRFi9W2LEUMGRiawA7G8YqU3eNxeoA6uqAKjg3D57Mmk00nfsfHDWO"
        >
          <button
            onClick={() =>
              alert(
                "You can enter 4242 4242 4242 4242 03/28 CVC:123 for testing"
              )
            }
            className="bg-darkBlue text-white px-3 py-1 hover-and-scale md:text-2xl text-sm"
          >
            CHECKOUT NOW
          </button>
        </StripeCheckOut>
      </div>
    </section>
  );
};

export default CartSummary;
