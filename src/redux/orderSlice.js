import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
  orders: [],
  loading: false,
  error: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrderStart: (state, action) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    createOrderError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // GET ORDER
    getOrderStart: (state, action) => {
      state.loading = true;
    },
    getOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    getOrderError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // GET USER ORDERS
    getUserOrdersStart: (state, action) => {
      state.loading = true;
    },
    getUserOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getUserOrdersError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createOrderStart,
  createOrderSuccess,
  createOrderError,
  getOrderStart,
  getOrderSuccess,
  getOrderError,
  getUserOrdersStart,
  getUserOrdersSuccess,
  getUserOrdersError,
} = orderSlice.actions;
export default orderSlice.reducer;
