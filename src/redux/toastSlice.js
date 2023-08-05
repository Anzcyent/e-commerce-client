import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notify: false,
  toastMessage: null,
  loading: false,
  error: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showNotify: (state, action) => {
      state.notify = true;
      state.toastMessage = action.payload;
    },
  },
});

export const { showNotify } = toastSlice.actions;
export default toastSlice.reducer;
