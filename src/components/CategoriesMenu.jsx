import React from "react";
import { categories } from "../utils/data";

const CategoriesMenu = () => {
  return (
    <section className="w-1/6 hidden md:flex flex-col min-h-[80vh]">
      {categories.map((category) => (
        <div className="bg-lightBlue mt-3 text-white p-2 rounded-lg hover-and-scale" title={category.description} key={category.id}>{category.name}</div>
      ))}
    </section>
  );
};

export default CategoriesMenu;
