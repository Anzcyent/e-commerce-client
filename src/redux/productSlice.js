import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
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
      state.filteredProducts = [];
    },
    getProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // FILTERED PRODUCTS
    getFilteredProductsStart: (state, action) => {
      state.loading = true;
    },
    getFilteredProductsSuccess: (state, action) => {
      state.loading = false;
      state.filteredProducts = action.payload;
    },
    getFilteredProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // SINGLE PRODUCT
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
  getFilteredProductsStart,
  getFilteredProductsSuccess,
  getFilteredProductsError,
  getProductStart,
  getProductSuccess,
  getProductError,
} = productSlice.actions;
export default productSlice.reducer;
