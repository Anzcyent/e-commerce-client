import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../utils/fetch";

const HomeProducts = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="vertical-scroll md:w-5/6 w-full p-5 flex flex-wrap justify-evenly items-start overflow-y-auto gap-10">
      {products.map((product) => (
        <div
          onClick={() => navigate(`/product/${product.id}`)}
          key={product.id}
          title={product.description}
          className="sm:w-[200px] w-[100px] sm:h-60 h-40 flex flex-col justify-evenly items-center border-2 border-darkBlue p-3 mr-5 hover-and-scale rounded-lg"
        >
          <img
            className="w-30 sm:h-40 h-20 object-cover"
            src={product.image}
            alt={product.title}
          />
          <span className="font-bold sm:text-base text-xs">{product.title}</span>
          <span className="font-semibold text-lightBlue sm:text-base text-sm">
            ${product.price}
          </span>
        </div>
      ))}
    </section>
  );
};

export default HomeProducts;
