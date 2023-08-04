import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  quantity: 0,
  total: 0,
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
      state.quantity = state.cart.products.length;
      state.total = action.payload.total;
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
      state.total = action.payload.total;
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
      state.total = action.payload.total;
    },
    updateCartError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // DELETE ITEM
    deleteItemStart: (state, action) => {
      state.loading = true;
    },
    deleteItemSuccess: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      state.quantity = state.cart.products.length;
      state.total = action.payload.total;
    },
    deleteItemError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCart: (state, action) => {
      state.cart = {}
      state.quantity = 0
      state.total = 0
      state.loading = false
      state.error = null
    }
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
  deleteItemStart,
  deleteItemSuccess,
  deleteItemError,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
