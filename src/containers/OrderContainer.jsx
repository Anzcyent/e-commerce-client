import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {useNavigate} from "react-router-dom"

const OrderContainer = () => {
  const { order } = useSelector((state) => state.orderReducer);
  const navigate = useNavigate();
 
  useEffect(() => {
    if(order._id) navigate(`/order/${order._id}`)
  }, [order._id])


  if (!order._id)
    return (
      <section className="font-urbanist p-3 grow text-4xl text-darkBlue font-bold flex justify-center items-center">
        Order Not Found
      </section>
    );

  return (
    <section className="font-urbanist p-3 grow flex justify-center items-center min-h-[50vh]">
      <div className="flex flex-col border-2 p-3 rounded-md shadow-lg">
        <span className="tracking-wide mb-5">
          <span className="font-bold text-darkBlue">Customer ID:</span>{" "}
          {order.customerId
            ? order.customerId
            : "No ID. Purchased without signing in."}
        </span>
        <span className="tracking-wide mb-5">
          <span className="font-bold text-darkBlue">Cart ID:</span>{" "}
          {order.cart}
        </span>
        <span className="tracking-wide mb-5">
          <span className="font-bold text-darkBlue">Name:</span>{" "}
          {order.customerName}
        </span>
        <div className="flex w-full gap-10 mb-5">
           <span className="text-darkBlue font-bold">Products:</span> {order.products.map(product => <img key={product._id} src={product.image} className="w-20" />)}
        </div>
        <span className="tracking-wide mb-5">
          <span className="font-bold text-darkBlue">Price:</span>{" "}
          ${order.totalPrice}
        </span>
        <span className="tracking-wide mb-5">
          <span className="font-bold text-darkBlue">Address:</span>{" "}
          {order.address}
        </span>
        <span className="font-bold text-darkBlue">
          {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
      </div>
    </section>
  );
};

export default OrderContainer;
