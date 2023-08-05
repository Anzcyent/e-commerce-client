import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserOrders } from "../utils/fetch";
import PuffLoader from "react-spinners/PuffLoader";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const OrdersContainer = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector((state) => state.authReducer);
  const { orders, loading, error } = useSelector((state) => state.orderReducer);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserOrders(user._id, accessToken));
  }, [user._id]);

  if (error)
    return (
      <section className="font-urbanist p-3 grow text-4xl text-darkBlue font-bold flex justify-center items-center">
        {error}
      </section>
    );

  if (loading)
    return (
      <section className="font-urbanist p-3 grow text-4xl text-darkBlue font-bold flex justify-center items-center">
        <PuffLoader color="#4c3398" />
      </section>
    );

  return (
    <section className="grow font-urbanist p-3 min-h-[50vh]">
      {orders.map((order) => (
        <div
          onClick={() => navigate(`/order/${order._id}`)}
          className="hover-and-scale bg-darkBlue p-2 text-white flex justify-between"
          key={order._id}
        >
          <span>{order._id}</span>
          <span>{moment(order.createdAt).fromNow()}</span>
        </div>
      ))}
    </section>
  );
};

export default OrdersContainer;
