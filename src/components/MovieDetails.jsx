/** @format */
// coming triller here
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Rating,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../slice/favoritesSlice";

export default function MovieDetails({ movie }) {
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

  if (!movie) return null;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        maxWidth: 900,
        mx: "auto",
        mt: 4,
        boxShadow: 4,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      {/* Poster */}
      <CardMedia
        component="img"
        // image={movie.poster_path}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://placehold.co/300x450?text=No+Poster"
        }
        alt={movie.title}
        sx={{
          width: { xs: "100%", md: 300 },
          height: { xs: 400, md: "auto" },
          objectFit: "cover",
        }}
      />

      {/* Details */}
      <CardContent
        sx={{
          flex: 1,
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "20px", sm: "24px", md: "28px" } }}
        >
          {movie.title} ({movie.year})
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: { xs: "14px", md: "16px" } }}
        >
          {movie.genre} • {movie.runtime}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <Rating value={movie.rating / 2} precision={0.5} readOnly />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "12px", md: "14px" } }}
          >
            {movie.rating.toFixed(1)} / 10
          </Typography>
        </Stack>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "14px", sm: "15px", md: "16px" } }}
        >
          {movie.overview}
        </Typography>

        <Box mt={2} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Button
            variant={isFavorite ? "contained" : "outlined"}
            color="secondary"
            onClick={handleFavorite}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
          <Button variant="outlined" color="secondary">
            Watch Trailer
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
