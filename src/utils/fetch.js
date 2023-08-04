import { deleteData, getData, postData, putData } from "./request";
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
import {
  createCartError,
  createCartStart,
  createCartSuccess,
  deleteItemError,
  deleteItemStart,
  deleteItemSuccess,
  getCartError,
  getCartStart,
  getCartSuccess,
  updateCartError,
  updateCartStart,
  updateCartSuccess,
} from "../redux/cartSlice";
import {
  createOrderError,
  createOrderStart,
  createOrderSuccess,
  getOrderError,
  getOrderStart,
  getOrderSuccess,
} from "../redux/orderSlice";

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

export const fetchCart = (cartId) => async (dispatch) => {
  try {
    dispatch(getCartStart());
    const res = await getData(`/cart/${cartId}`);
    dispatch(getCartSuccess(res.data.cart));
  } catch (error) {
    dispatch(getCartError(error.response.data.message));
  }
};

export const fetchCreateCart = (data) => async (dispatch) => {
  try {
    dispatch(createCartStart());
    const res = await postData("/cart/create", data);
    localStorage.setItem("cartId", String(res.data.cart._id));
    dispatch(createCartSuccess(res.data.cart));
  } catch (error) {
    dispatch(createCartError(error.response.data.message));
    console.log(error.response.data.message);
  }
};

export const fetchUpdateCart = (cartId, data) => async (dispatch) => {
  try {
    dispatch(updateCartStart());
    const res = await putData(`/cart/update/${cartId}`, data);
    dispatch(updateCartSuccess(res.data.updatedCart));
  } catch (error) {
    dispatch(updateCartError(error.response.data.message));
  }
};

export const fetchDeleteItemInCart =
  (cartId, productId) => async (dispatch) => {
    try {
      dispatch(deleteItemStart());
      const res = await deleteData(
        `/cart/deleteItem/${cartId}?productId=${productId}`
      );
      dispatch(deleteItemSuccess(res.data.cart));
    } catch (error) {
      dispatch(deleteItemError(error.response.data.message));
    }
  };

export const fetchCreateOrder = (data, navigate) => async (dispatch) => {
  try {
    dispatch(createOrderStart());
    const res = await postData("/order/create", data);
    dispatch(createOrderSuccess(res.data.order));
    navigate(`/order/${res.data.order._id}`)
  } catch (error) {
    dispatch(createOrderError(error.response.data.message));
  }
};

export const fetchOrder = (orderId) => async (dispatch) => {
  try {
    dispatch(getOrderStart());
    const res = await getData(`/order/${orderId}`);
    dispatch(getOrderSuccess(res.data.order));
  } catch (error) {
    dispatch(getOrderError(error.response.data.message));
  }
};
