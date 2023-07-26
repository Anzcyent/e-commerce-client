import React from "react";
import { CategoriesMenu, HomeProducts } from "../components";

const HomeContainer = () => {
  return (
    <main className="grow p-3 flex w-full font-urbanist bg-[#fafafa] min-h-[85vh]">
        <CategoriesMenu />
        <HomeProducts />
    </main>
  );
};

export default HomeContainer;
