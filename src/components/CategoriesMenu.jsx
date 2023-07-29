import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../utils/fetch";
import PuffLoader from "react-spinners/PuffLoader";

const CategoriesMenu = () => {
  const { categories, loading, error } = useSelector(
    (state) => state.categoryReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (loading)
    return (
      <section className="w-1/6 hidden md:flex flex-col min-h-[80vh] justify-center items-center">
        <span>{error}</span>
      </section>
    );

  if (error)
    return (
      <section className="w-1/6 hidden md:flex flex-col min-h-[80vh] justify-center items-center">
        <PuffLoader color="#5d3ebc" />
      </section>
    );

  return (
    <section className="w-1/6 hidden md:flex flex-col min-h-[80vh]">
      {categories?.map((category) => (
        <div
          className="bg-lightBlue mt-3 text-white p-2 rounded-lg hover-and-scale"
          title={category.description}
          key={category._id}
        >
          {category.name}
        </div>
      ))}
    </section>
  );
};

export default CategoriesMenu;
