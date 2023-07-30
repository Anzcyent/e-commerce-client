import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productShown: {},
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsStart: (state, action) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getProductStart: (state, action) => {
      state.loading = true;
    },
    getProductSuccess: (state, action) => {
      state.loading = false;
      state.productShown = action.payload;
    },
    getProductError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsError,
  getProductStart,
  getProductSuccess,
  getProductError,
} = productSlice.actions;
export default productSlice.reducer;
