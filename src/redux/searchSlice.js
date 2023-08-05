import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchOpen: false,
  searchProducts: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchStart: (state, action) => {
      state.loading = true;
      state.searchOpen = true;
    },
    searchSuccess: (state, action) => {
      state.loading = false;
      state.searchProducts = action.payload;
    },
    searchError: (state, action) => {
      state.loading = false;
      state.searchOpen = false;
    },
    closeSearch: (state, action) => {
      state.loading = false;
      state.searchOpen = false;
    },
  },
});

export const { searchStart, searchSuccess, searchError, closeSearch } =
  searchSlice.actions;
export default searchSlice.reducer;
