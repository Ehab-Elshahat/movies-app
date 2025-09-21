/** @format */

import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.movies);

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        
        mb={2}
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}
      >
        🎬 My Favorite Movies
      </Typography>

      {favorites.length > 0 ? (
        <Grid
          container
          spacing={3}
          justifyContent={{ xs: "center", sm: "flex-start" }}
          alignItems="stretch"
        >
          {favorites.map((movie) => (
            <Grid
              item
              key={movie.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box textAlign={"center"}>
          <Typography sx={{ textAlign: "center", mt: 4 }}>
            No favorite movies yet.
          </Typography>
          <Link
            to={"/"}
            style={{
              display: "inline-block",
              marginBlock: "1.5rem",
              textDecoration: "none",
              color: "white",
              background: "#1976d2",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Go To Home
          </Link>
        </Box>
      )}
    </Container>
  );
}
