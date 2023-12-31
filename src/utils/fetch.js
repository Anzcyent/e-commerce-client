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
  getUserOrdersError,
  getUserOrdersStart,
  getUserOrdersSuccess,
} from "../redux/orderSlice";
import {
  loginError,
  loginStart,
  loginSuccess,
  logoutError,
  logoutStart,
  logoutSuccess,
  registerError,
  registerStart,
  registerSuccess,
} from "../redux/authSlice";
import { searchError, searchStart, searchSuccess } from "../redux/searchSlice";
import { showNotify } from "../redux/toastSlice";

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(getCategoriesStart());
    const res = await getData("/category");
    dispatch(getCategoriesSuccess(res.data.categories));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(getCategoriesError(error.response.data.message));
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsStart());
    const res = await getData("/product?sort=new");
    dispatch(getProductsSuccess(res.data.products));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(getProductsError(error.response.data.message));
  }
};

export const fetchFilteredProducts = (categoryId) => async (dispatch) => {
  try {
    dispatch(getFilteredProductsStart());
    const res = await getData(`/product?category=${categoryId}`);
    dispatch(getFilteredProductsSuccess(res.data.products));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(getFilteredProductsError(error.response.data.message));
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch(getProductStart());
    const res = await getData(`/product/${id}`);
    dispatch(getProductSuccess(res.data.product));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(getProductError(error.response.data.message));
  }
};

export const fetchCart = (cartId) => async (dispatch) => {
  try {
    dispatch(getCartStart());
    const res = await getData(`/cart/${cartId}`);
    dispatch(getCartSuccess(res.data.cart));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
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
    dispatch(showNotify(error.response.data.message));
    dispatch(createCartError(error.response.data.message));
  }
};

export const fetchUpdateCart = (cartId, data) => async (dispatch) => {
  try {
    dispatch(updateCartStart());
    const res = await putData(`/cart/update/${cartId}`, data);
    dispatch(updateCartSuccess(res.data.updatedCart));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
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
      dispatch(showNotify(error.response.data.message));
      dispatch(deleteItemError(error.response.data.message));
    }
  };

export const fetchCreateOrder = (data, navigate) => async (dispatch) => {
  try {
    dispatch(createOrderStart());
    const res = await postData("/order/create", data);
    dispatch(createOrderSuccess(res.data.order));
    console.log(res.data);
    navigate(`/order/${res.data.order._id}`);
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(createOrderError(error.response.data.message));
  }
};

export const fetchOrder = (orderId) => async (dispatch) => {
  try {
    dispatch(getOrderStart());
    const res = await getData(`/order/${orderId}`);
    dispatch(getOrderSuccess(res.data.order));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(getOrderError(error.response.data.message));
  }
};

export const fetchUserOrders = (userId, token) => async (dispatch) => {
  try {
    dispatch(getUserOrdersStart());
    const res = await getData(`/order/userOrders/${userId}`, token);
    dispatch(getUserOrdersSuccess(res.data.orders));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(getUserOrdersError(error.response.data.message));
  }
};

export const fetchRegister = (data) => async (dispatch) => {
  try {
    dispatch(registerStart());
    const res = await postData("/auth/register", data);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(registerError(error.response.data.message));
  }
};

export const fetchLogin = (data) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const res = await postData("/auth/login", data);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(loginError(error.response.data.message));
  }
};

export const fetchLogout = () => async (dispatch) => {
  try {
    dispatch(logoutStart());
    const res = await getData("/auth/logout");
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(showNotify(error.response.data.message));
    dispatch(logoutError(error.response.data.message));
  }
};

export const fetchSearch = (query) => async (dispatch) => {
  try {
    dispatch(searchStart());
    const res = await getData(`/app/search?query=${query}`);
    dispatch(searchSuccess(res.data.products));
  } catch (error) {
    dispatch(searchError());
  }
};
