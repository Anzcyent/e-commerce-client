import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  quantity: 0,
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // GET
    getCartStart: (state, action) => {
      state.loading = true;
    },
    getCartSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    },
    getCartError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // CREATE
    createCartStart: (state, action) => {
      state.loading = true;
    },
    createCartSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      state.quantity = state.cart.products.length;
    },
    createCartError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // UPDATE CART
    updateCartStart: (state, action) => {
      state.loading = true;
    },
    updateCartSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      state.quantity = state.cart.products.length;
    },
    updateCartError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCartStart,
  getCartSuccess,
  getCartError,
  createCartStart,
  createCartSuccess,
  createCartError,
  updateCartStart,
  updateCartSuccess,
  updateCartError,
} = cartSlice.actions;
export default cartSlice.reducer;
