import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  loading: false,
  recentlyPlayed: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
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
      state.recentlyPlayed.splice(5);
      state.recentlyPlayed.push(action.payload.game)
    },
  }
});

export const {
  setMode,
  setLogin,
  setRecentlyPlayed
} = authSlice.actions;

export default authSlice.reducer;