import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accessToken: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // register
    registerStart: (state, action) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.access_token;
    },
    registerError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // logout
    logoutStart: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.user = {};
      state.accessToken = null;
    },
    logoutError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerError,
  logoutStart,
  logoutSuccess,
  logoutError,
} = authSlice.actions;
export default authSlice.reducer;
