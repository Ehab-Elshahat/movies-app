/** @format */

import React from "react";

import { Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function MoviesList({ movies }) {
  return (
      

      <Grid
        container
        spacing={3}
        sx={{
          mt: 2,
          px: { xs: 2, sm: 4, md: 6 },
          justifyContent: "center", 
          alignItems: "stretch", 
        }}
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Typography sx={{ textAlign: "center" }} variant="body1">
            No movies found.
          </Typography>
        )}
      </Grid>
    
  );
}
