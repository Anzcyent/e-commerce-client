import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSingleProduct,
  fetchCreateCart,
  fetchUpdateCart,
} from "../utils/fetch";
import PuffLoader from "react-spinners/PuffLoader";
import { showNotify } from "../redux/toastSlice";

const ProductContainer = () => {
  const [quantityCounter, setQuantityCounter] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

  const user = false;

  const navigate = useNavigate();
  const { productShown, loading, error } = useSelector(
    (state) => state.productReducer
  );
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    cart?.products?.map((product) => {
      if (product._id == id) setDisableButton(true);
    });
  }, [cart]);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  const handleQuantity = (op) => {
    if (op === "+") {
      if (quantityCounter < productShown.quantity) {
        setQuantityCounter(quantityCounter + 1);
      }
    }

    if (op === "-") {
      if (quantityCounter > 1) {
        setQuantityCounter(quantityCounter - 1);
      }
    }
  };

  const handleCreateCart = () => {
    if (!localStorage.getItem("cartId")) {
      dispatch(
        fetchCreateCart({
          product: {
            ...productShown,
            quantity: quantityCounter,
            price: quantityCounter * productShown.price,
          },
          customer: user ? user._id : null,
          total: quantityCounter * productShown.price,
        })
      );

      dispatch(showNotify(`${productShown.title} has been added to cart.`));
    } else {
      dispatch(
        fetchUpdateCart(localStorage.getItem("cartId"), {
          product: {
            ...productShown,
            quantity: quantityCounter,
            price: quantityCounter * productShown.price,
          },
          customer: user ? user._id : null,
          total: quantityCounter * productShown.price,
        })
      );

      dispatch(showNotify(`${productShown.title} has been added to cart.`));
    }
  };

  if (loading)
    return (
      <main className="grow p-3 flex flex-col justify-center items-center font-urbanist min-h-[90vh]">
        <PuffLoader color="#5d3ebc" />
      </main>
    );

  if (error)
    return (
      <main className="grow p-3 flex flex-col justify-center items-center font-urbanist min-h-[90vh]">
        <h1 className="font-bold text-darkBlue">{error}</h1>
      </main>
    );

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
          src={productShown.image}
          alt="product"
        />
        <h1 className="font-bold mt-5 text-2xl text-darkBlue">
          {productShown.title}
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5">
        <p className="text-biceBlue">{productShown.description}</p>

        <span className="mt-2">
          There are{" "}
          <span className="font-bold text-darkBlue">
            {productShown.quantity}
          </span>{" "}
          in stock.{" "}
        </span>

        <span className="opacity-50 text-darkBlue font-bold mt-5 flex">
          <span className="mr-2 italic">#{productShown?.category?.name}</span>
          <span>by {productShown?.seller?.username}</span>
        </span>

        <div className="md:w-1/2 w-full flex justify-between items-center border-2 p-3 mt-3 rounded-md">
          <div className="flex">
            <button
              className="text-2xl mr-3 hover-and-scale text-lightBlue"
              onClick={() => handleQuantity("-")}
            >
              -
            </button>
            <span className="text-2xl mr-3 font-bold">{quantityCounter}</span>
            <button
              className="text-2xl hover-and-scale text-lightBlue"
              onClick={() => handleQuantity("+")}
            >
              +
            </button>
          </div>

          <span className="font-bold text-darkBlue md:text-2xl text-lg">
            $
            {quantityCounter > 1
              ? Math.floor(productShown.price * quantityCounter)
              : productShown.price}
          </span>

          <button
            onClick={handleCreateCart}
            className="bg-darkBlue px-3 py-1 text-white font-bold hover-and-scale disabled:bg-black disabled:cursor-not-allowed"
            disabled={disableButton}
            title={disableButton ? "The product is already in cart" : undefined}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductContainer;
