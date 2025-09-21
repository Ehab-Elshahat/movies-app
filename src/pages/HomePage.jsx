/** @format */

import React from "react";
import MoviesList from "../components/MoviesList";
import PaginationRounded from "../components/helper/Pagination";
import { Stack, Typography, Container } from "@mui/material";
import Loader from "../components/helper/Loader";

function HomePage({ movies, page, setPage, loading }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}
      >
        🎬 Movies list
      </Typography>

      {loading ? <Loader /> : <MoviesList movies={movies} />}

      <Stack spacing={2} alignItems="center" mt={3}>
        <PaginationRounded page={page} setPage={setPage} />
      </Stack>
    </Container>
  );
}

export default HomePage;
