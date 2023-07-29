import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: null
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoriesStart: (state, action) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = [...state.categories, ...action.payload];
    },
    getCategoriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCategoriesStart, getCategoriesSuccess, getCategoriesError } =
  categorySlice.actions;
export default categorySlice.reducer;
