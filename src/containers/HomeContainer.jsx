import React from "react";
import {
  CategoriesMenu,
  HomeProducts,
  ResponsiveCategoriesMenu,
} from "../components";

const HomeContainer = () => {
  return (
    <main className="grow p-3 flex md:flex-row flex-col w-full font-urbanist bg-[#fafafa] min-h-[85vh] relative">
      <ResponsiveCategoriesMenu />
      <CategoriesMenu />
      <HomeProducts />
    </main>
  );
};

export default HomeContainer;
