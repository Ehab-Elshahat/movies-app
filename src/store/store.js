/** @format */

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../slice/themeSlice'
import favoritesReducer from "../slice/favoritesSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    favorites: favoritesReducer,
  },
});
