/** @format */

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import MovieDetails from "../components/MovieDetails";
import { Stack } from "@mui/material";
import Loader from "../components/helper/Loader";
import api from "../components/helper/apiAxios";

// const API_KEY = `fd9d0f909145fce3dbdc79953c5325b9`;

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const res = await api.get(`/movie/${id}`);
      const data = res.data;
      setMovie({
        id: data.id,
        title: data.title,
        year: data.release_date?.split("-")[0],
        genre: data.genres?.map((g) => g.name).join(", "),
        runtime: data.runtime + " min",
        rating: data.vote_average,
        overview: data.overview,
        poster_path:  data.poster_path,
      });
      setLoading(false);
    }
    fetchMovie();
  }, [id]);

  return (
    <Stack
      sx={{
        background:
          "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        gap: 2,
        px: { xs: 2 },
      }}
    >
      {loading ? <Loader /> : <MovieDetails movie={movie} />}

      <Link
        to={"/"}
        style={{
          margin: "20px 0 30px",
          textDecoration: "none",
          color: "white",
          background: "#1976d2",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        Go To Home
      </Link>
    </Stack>
  );
}

export default MovieDetailsPage;
