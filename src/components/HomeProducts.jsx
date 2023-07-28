import React from "react";
import { products } from "../utils/data";

const HomeProducts = () => {
  return (
    <section className="vertical-scroll md:w-5/6 w-full p-5 flex flex-wrap justify-evenly items-start overflow-y-auto gap-10">
      {products.map((product) => (
        <div key={product.id} title={product.description} className="sm:w-[200px] w-[100px] sm:h-60 h-40 flex flex-col justify-evenly items-center border-2 border-darkBlue p-3 mr-5 hover-and-scale rounded-lg">
          <img className="w-30 sm:h-40 h-20 object-cover" src={product.image} alt={product.name} />
          <span className="font-bold sm:text-base text-xs">{product.name}</span>
          <span className="font-semibold text-lightBlue sm:text-base text-sm">${product.price}</span>
        </div>
      ))}
    </section>
  );
};

export default HomeProducts;
