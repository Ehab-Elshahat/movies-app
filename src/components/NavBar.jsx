/** @format */

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Drawer,
  Box,
  Container,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Brightness4, Brightness7, DarkMode, LightMode } from "@mui/icons-material";

import { Link } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {toggleTheme} from '../slice/themeSlice'

const TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDlkMGY5MDkxNDVmY2UzZGJkYzc5OTUzYzUzMjViOSIsIm5iZiI6MTY3NjQwMDU3MC4wNiwic3ViIjoiNjNlYmQ3YmFmOTI1MzIwMGMzZmY4Y2U5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KVDkP98qbVjKFqrUhatyhO8pcAbc267OkS8VwdWKxmc`;

export default function Navbar({ setMovies }) {
  const theme = useTheme();
  const gradientBg =
    theme.palette.mode === "dark"
      ? "linear-gradient(90deg, #2a0845 0%, #1e3c72 100%)" // Dark
      : "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)"; // Light

  const favoritesNumber = useSelector((state) => state.favorites.movies).length;

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const [query, setQuery] = useState("");

  // Search Function
  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (!query) return;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            query: query,
            include_adult: false,
            language: "en-US",
            page: 1,
          },
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ background: gradientBg }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: { xs: "16px", md: "24px" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Movies App
              </Typography>
            </Link>

            {/* Search Box */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                mx: 2,
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  px: 1,
                  width: { xs: "100%", md: "60%" },
                }}
              >
                <InputBase
                  placeholder="Search movies..."
                  sx={{ color: "white", ml: 1, flex: 1 }}
                  value={query}
                  onChange={handleSearch}
                />
                <IconButton sx={{ color: "white" }} onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Desktop Menu */}
            <List
              sx={{
                gap: 5,
                display: { xs: "none", md: "flex" }, // hide on mobile
              }}
            >
              <ListItem sx={{ width: "auto", p: 0 }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Home
                </Link>
              </ListItem>

              <ListItem sx={{ width: "auto", p: 0 }}>
                <Link
                  to="/favoritesmovies"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Favorites Movies
                </Link>{" "}
                <span
                  style={{
                    position: "absolute",
                    backgroundColor: "#ad1457",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: "bold",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    top: "-11px",
                    right: "-12px",
                  }}
                >
                  {favoritesNumber}
                </span>
              </ListItem>

              <ListItem sx={{ width: "auto", p: 0 }}>
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  About App
                </Link>
              </ListItem>
            </List>
            <Box ml={1}>
              <IconButton
                onClick={() => dispatch(toggleTheme())}
                sx={{
                  color: mode === "dark" ? "#ffeb3b" : "#1e3a8a", // أصفر للشمس، أزرق للقمر
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {mode === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Box>
            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, height:"100%",background:gradientBg }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <IconButton onClick={toggleDrawer(false) }>
              <CloseIcon  sx={{color:"#fff"}}/>
            </IconButton>
          </Box>

          <List sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
            <ListItem sx={{ width: "auto", p: 0 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Home
              </Link>
            </ListItem>

            <ListItem sx={{ width: "auto", p: 0 }}>
              <Link
                to="/favoritesmovies"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Favorites Movies
              </Link>{" "}
              <span
                style={{
                  backgroundColor: "#ad1457",
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: "bold",
                  textAlign: "center",
                  borderRadius: "3px",
                  display: "flex",
                  marginLeft: "10px",
                  padding: "2px 5px ",
                }}
              >
                {favoritesNumber}
              </span>
            </ListItem>

            <ListItem sx={{ width: "auto", p: 0 }}>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                About App
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
