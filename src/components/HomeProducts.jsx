import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../utils/fetch";
import PuffLoader from "react-spinners/PuffLoader";

const HomeProducts = () => {
  const navigate = useNavigate();
  const { products, filteredProducts, loading, error } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let filter;

  if (filteredProducts.length > 0) {
    filter = filteredProducts;
  } else {
    filter = products;
  }

  if (loading)
    return (
      <section className="md:w-5/6 w-full flex flex-wrap justify-center items-center">
        <PuffLoader color="#5d3ebc" />
      </section>
    );

  if (error)
    return (
      <section className="md:w-5/6 w-full flex flex-wrap justify-center items-center">
        <h1 className="font-bold text-4xl text-darkBlue">{error}</h1>
      </section>
    );

  return (
    <section className="vertical-scroll md:w-5/6 w-full p-5 flex flex-wrap justify-evenly items-start overflow-y-auto gap-10">
      {filter.map((product) => (
        <div
          onClick={() => navigate(`/product/${product._id}`)}
          key={product._id}
          title={product.description}
          className="sm:w-[200px] w-[100px] sm:h-60 h-40 flex flex-col justify-evenly items-center border-2 border-darkBlue p-3 mr-5 hover-and-scale rounded-lg"
        >
          <img
            className="w-30 sm:h-40 h-20 object-cover"
            src={product.image}
            alt={product.title}
          />
          <span className="font-bold sm:text-base text-xs">
            {product.title}
          </span>
          <span className="font-semibold text-lightBlue sm:text-base text-sm">
            ${product.price}
          </span>
        </div>
      ))}

      {filteredProducts.length > 0 && (
        <button
          onClick={() => dispatch(fetchProducts())}
          className="bg-darkBlue text-white px-3 py-1 hover-and-scale self-center"
        >
          Reset Filter
        </button>
      )}
    </section>
  );
};

export default HomeProducts;
