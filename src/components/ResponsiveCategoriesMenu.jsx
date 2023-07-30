import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../utils/fetch";
import PuffLoader from "react-spinners/PuffLoader";

const ResponsiveCategoryMenu = () => {
  const { categories, loading, error } = useSelector(
    (state) => state.categoryReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (loading)
    return (
      <section className="md:hidden flex flex-col min-h-[80vh] justify-center items-center">
         <PuffLoader color="#5d3ebc" />
      </section>
    );

  if (error)
    return (
      <section className="md:hidden flex flex-col min-h-[80vh]">
        <h1 className="font-bold text-darkBlue text-4xl">{error}</h1>
      </section>
    );

  return (
    <section className="md:hidden flex overflow-x-auto overflow-y-hidden horizontal-scroll h-[50vh]">
      {categories.map((category) => (
        <div
          className="bg-lightBlue text-white px-3 py-0 text-xs mr-2 rounded-lg hover-and-scale h-max-content flex justify-center items-center"
          title={category.description}
          key={category._id}
        >
          {category.name}
        </div>
      ))}
    </section>
  );
};

export default ResponsiveCategoryMenu;
