import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../utils/fetch";
import PuffLoader from "react-spinners/PuffLoader";

const ProductContainer = () => {
  const navigate = useNavigate();
  const { productShown, loading, error } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  if (loading)
    return (
      <main className="grow p-3 flex flex-col justify-center items-center font-urbanist min-h-[90vh]">
        <PuffLoader color="#5d3ebc" />
      </main>
    );

  if (error)
    return (
      <main className="grow p-3 flex flex-col justify-center items-center font-urbanist min-h-[90vh]">
        <h1 className="font-bold text-darkBlue">{error}</h1>
      </main>
    );

  return (
    <main className="grow p-3 flex flex-col font-urbanist">
      <div className="w-full flex md:justify-start justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-biceBlue text-white px-3 py-1 hover-and-scale"
        >
          Return Shopping
        </button>
      </div>
      <div className="w-full flex flex-col items-center md:mt-0 mt-5">
        <img
          className="md:w-1/6 w-3/6"
          src={productShown.image}
          alt="product"
        />
        <h1 className="font-bold mt-5 text-2xl text-darkBlue">
          {productShown.title}
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5">
        <p className="text-biceBlue">{productShown.description}</p>

        <span className="mt-2">
          There are{" "}
          <span className="font-bold text-darkBlue">
            {productShown.quantity}
          </span>{" "}
          in stock.{" "}
        </span>

        <span className="opacity-50 text-darkBlue font-bold mt-5 flex">
          <span className="mr-2 italic">#{productShown?.category?.name}</span>
          <span>by {productShown?.seller?.username}</span>
        </span>

        {/* Quantity miktarı stock quantity'sini geçmeyecek */}
        <div className="md:w-1/2 w-full flex justify-between border-2 p-3 mt-3 rounded-md">
          <div className="flex">
            <span className="text-2xl mr-3 hover-and-scale text-lightBlue">
              -
            </span>
            <span className="text-2xl mr-3 font-bold">1</span>
            <span className="text-2xl hover-and-scale text-lightBlue">+</span>
          </div>

          <button className="bg-darkBlue px-3 py-1 text-white font-bold hover-and-scale">
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductContainer;
