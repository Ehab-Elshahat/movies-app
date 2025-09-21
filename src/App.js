/** @format */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AboutPage from "./pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";


const API_KEY = `fd9d0f909145fce3dbdc79953c5325b9`;

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // theme Mode
  const mode = useSelector((state)=>state.theme.mode)

  const theme = createTheme({
    palette:{
      mode: mode
    }
  })

  useEffect(() => {
    // Define Fetch data Function
    const fetchMovies = async () => {
      try {
        setLoading(false);

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <NavBar movies={movies} setMovies={setMovies} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                movies={movies}
                page={page}
                setPage={setPage}
                loading={loading}
              />
            }
          />
          <Route path="/:id" element={<MovieDetailsPage />} />
          <Route path="/favoritesmovies" element={<FavoritesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// Steps
// 1- finish axios async and spinner ==
//  Move Details ==
// redux tool kit ==
// fav move ===
// style card with fav button==
// number of fav==
// add remove fav button in movie details page==
