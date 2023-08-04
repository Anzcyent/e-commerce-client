import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
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
  },
});

export const {
  createOrderStart,
  createOrderSuccess,
  createOrderError,
  getOrderStart,
  getOrderSuccess,
  getOrderError,
} = orderSlice.actions;
export default orderSlice.reducer;
