/** @format */

import { createSlice } from "@reduxjs/toolkit";

// Get fav from localStorag
const storedFavorites = localStorage.getItem("favoritesMovies");
const initialState = {
  movies: storedFavorites ? JSON.parse(storedFavorites) : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.movies.some((m) => m.id === action.payload.id)) {
        state.movies.push(action.payload);
        localStorage.setItem("favoritesMovies", JSON.stringify(state.movies));
      }
    },
    removeFavorite: (state, action) => {
      state.movies = state.movies.filter((m) => m.id !== action.payload);
      localStorage.setItem("favoritesMovies", JSON.stringify(state.movies));
    },
  },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
