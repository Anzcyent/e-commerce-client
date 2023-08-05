import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

const SearchResults = () => {
  const navigate = useNavigate();
  const { searchProducts, loading } = useSelector(
    (state) => state.searchReducer
  );

  if (loading)
    return (
      <div className="fixed top-20 left-0 bg-darkBlue w-full min-h-[50vh] z-50 p-5 flex justify-evenly">
        <PuffLoader color="#ffd300" />
      </div>
    );

  return (
    <div className="fixed top-20 left-0 bg-darkBlue w-full min-h-[50vh] z-50 p-5 flex justify-evenly flex-wrap gap-10">
      {searchProducts.map((product) => (
        <div onClick={() => navigate(`/product/${product._id}`)} className="flex flex-col hover-and-scale" key={product._id}>
          <img
            className="w-40 h-40 object-cover rounded-sm"
            src={product.image}
            alt="product"
          />
          <span className="self-center text-yellow">{product.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
