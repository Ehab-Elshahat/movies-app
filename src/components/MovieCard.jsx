/** @format */

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../slice/favoritesSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);


  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 250,
          // minWidth:240,
          borderRadius: 2,
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        {/* Poster */}
        <Link to={`/${movie.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="350"
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://placehold.co/600?text=No+Poster"
            }
            loading="lazy"
            alt={movie.title}
          />
        </Link>
        {/* Info */}
        <CardContent>
          <Typography variant="h6" component="div" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.release_date}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <IconButton color="secondary" onClick={handleFavorite}>
              {isFavorite ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
}
