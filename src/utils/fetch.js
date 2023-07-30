import { getData } from "./request";
import {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesError,
} from "../redux/categorySlice";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  getProductStart,
  getProductSuccess,
  getProductError,
  getFilteredProductsError,
  getFilteredProductsStart,
  getFilteredProductsSuccess,
} from "../redux/productSlice";

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoriesStart());
    const res = await getData("/category");
    dispatch(getCategoriesSuccess(res.data.categories));
  } catch (error) {
    dispatch(getCategoriesError(error.response.data.message));
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsStart());
    const res = await getData("/product?sort=new");
    dispatch(getProductsSuccess(res.data.products));
  } catch (error) {
    dispatch(getProductsError(error.response.data.message));
  }
};

export const fetchFilteredProducts = (categoryId) => async (dispatch) => {
  try {
    dispatch(getFilteredProductsStart());
    const res = await getData(`/product?category=${categoryId}`);
    dispatch(getFilteredProductsSuccess(res.data.products));
  } catch (error) {
    dispatch(getFilteredProductsError(error.response.data.message));
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch(getProductStart());
    const res = await getData(`/product/${id}`);
    dispatch(getProductSuccess(res.data.product));
  } catch (error) {
    dispatch(getProductError(error.response.data.message));
  }
};
