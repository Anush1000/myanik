import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userId: localStorage.getItem('id') || false,
  isLoggedIn: localStorage.getItem('id') ? true : false,
  darkMode: false, // Change to false for light mode as default
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
      state.userId = localStorage.getItem('id');
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.userId = false;
      toast.success("You have successfully logged out");
    },
    changeMode: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        document.querySelector('html').setAttribute('data-theme', "dark");
      } else {
        document.querySelector('html').setAttribute('data-theme', "light"); // Change to "light" for light mode
      }
    }
  },
});

export const { loginUser, logoutUser, changeMode } = authSlice.actions;

export default authSlice.reducer;
