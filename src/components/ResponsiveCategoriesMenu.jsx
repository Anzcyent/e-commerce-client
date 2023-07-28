import React from "react";
import { categories } from "../utils/data";

const ResponsiveCategoryMenu = () => {
  return (
    <section className="md:hidden flex overflow-x-auto overflow-y-hidden horizontal-scroll h-[50vh]">
      {categories.map((category) => (
        <div
          className="bg-lightBlue text-white px-3 py-0 text-xs mr-2 rounded-lg hover-and-scale h-max-content flex justify-center items-center"
          title={category.description}
          key={category.id}
        >
          {category.name}
        </div>
      ))}
    </section>
  );
};

export default ResponsiveCategoryMenu;
