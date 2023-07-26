import React from "react";
import { products } from "../utils/data";

const HomeProducts = () => {
  return (
    <section className="home-products md:w-5/6 w-full p-5 flex flex-wrap justify-evenly items-start overflow-y-auto gap-10">
      {products.map((product) => (
        <div key={product.id} title={product.description} className="w-[200px] h-60 flex flex-col justify-evenly items-center border-2 border-darkBlue p-3 mr-5 hover-and-scale rounded-lg">
          <img className="w-30 h-40 object-cover" src={product.image} alt={product.name} />
          <span className="font-bold">{product.name}</span>
          <span className="font-semibold text-lightBlue">${product.price}</span>
        </div>
      ))}
    </section>
  );
};

export default HomeProducts;
