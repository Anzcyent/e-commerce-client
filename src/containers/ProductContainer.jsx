import React from "react";
import { useNavigate } from "react-router-dom";

const ProductContainer = () => {
  const navigate = useNavigate();

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
          src="https://thesenovelthoughts.files.wordpress.com/2021/01/bfdfea49-a584-408f-8e94-d94de2f1c010.jpeg"
          alt="product"
        />
        <h1 className="font-bold mt-5 text-2xl text-darkBlue">
          Classic Novel Collection
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5">
        <p className="text-biceBlue">
          Immerse yourself in the world of classic literature with this novel
          collection.
        </p>

        <span className="mt-2">
          There are <span className="font-bold text-darkBlue">50</span> in
          stock.{" "}
        </span>

        <span className="opacity-50 text-darkBlue font-bold mt-5 flex">
          <span className="mr-2 italic">#Books & Stationery</span>
          <span>by Cihan Company</span>
        </span>

        {/* Quantity miktarı stock quantity'sini geçmeyecek */}
        {/* Elbise ise size seçeneği olacak */}
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
