import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  loading: false,
  menuToggle: true,
  recentlyPlayed: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload === 'light' ? 'dark' : 'light'
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
      if (state.recentlyPlayed.length < 3) {
        state.recentlyPlayed.push(action.payload)
      } else {
        state.recentlyPlayed = [action.payload, state.recentlyPlayed[0], state.recentlyPlayed[1], state.recentlyPlayed[2]]
      }
    },
    setMenuToggle: (state, action) => {
      state.menuToggle = action.payload
    }
  }
});

export const {
  setMode,
  setLogin,
  setLogout,
  setMenuToggle,
  setRecentlyPlayed
} = authSlice.actions;

export default authSlice.reducer;