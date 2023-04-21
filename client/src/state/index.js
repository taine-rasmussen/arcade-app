import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: null,
  token: null,
  loading: false,
  recentlyPlayed: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setRecentlyPlayed: (state, action) => {
      state.recentlyPlayed.push(action.payload.game)
    }
  }
});

export const {
  setMode,
  setLogin,
  setRecentlyPlayed
} = authSlice.actions;

export default authSlice.reducer;