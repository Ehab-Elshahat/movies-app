/** @format */

import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("appTheme")

const initialState = {
  mode: storedTheme ? JSON.parse(storedTheme) :"light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem('appTheme', JSON.stringify(state.mode))
    }
  },
});


export const {toggleTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer