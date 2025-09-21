/** @format */

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import { Movie, Speed, Search } from "@mui/icons-material";

import { useTheme } from "@emotion/react";

export default function AboutPage() {
  const theme = useTheme();
  const gradientBg =
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" // Dark
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"; // Light
  return (
    <Box
      sx={{
        minHeight: "93.8vh",
        py: 6,
        background: gradientBg,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
          About This App
        </Typography>

        <Typography variant="h6" align="center" sx={{ mb: 6 }}>
          Discover movies, search your favorites, and explore details — built
          with ❤️
        </Typography>

        {/* Features Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 3, textAlign: "center", height: "100%" }}>
              <CardContent>
                <Movie sx={{ fontSize: 50, color: "#764ba2" }} />
                <Typography variant="h6" gutterBottom>
                  Browse Movies
                </Typography>
                <Typography variant="body2">
                  Explore trending and popular movies with detailed info.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 3, textAlign: "center", height: "100%" }}>
              <CardContent>
                <Search sx={{ fontSize: 50, color: "#764ba2" }} />
                <Typography variant="h6" gutterBottom>
                  Smart Search
                </Typography>
                <Typography variant="body2">
                  Quickly search movies with instant results and filters.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 3, textAlign: "center", height: "100%" }}>
              <CardContent>
                <Speed sx={{ fontSize: 50, color: "#764ba2" }} />
                <Typography variant="h6" gutterBottom>
                  Fast & Responsive
                </Typography>
                <Typography variant="body2">
                  Optimized for speed with a responsive modern UI.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Author Section */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Avatar
            src="/avatar.jpeg"
            alt="Author"
            sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
          />
          <Typography variant="h5" fontWeight="bold">
            Ehab Elshahat
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Front-End Developer | React.js, JavaScript, MUI, Tailwind
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: "600px", mx: "auto" }}>
            Hi 👋 I’m Ehab, a passionate Frontend Developer specialized in
            building modern, responsive, and user-friendly web apps. This
            project is one of my showcases to combine creativity with
            functionality.
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Button
            variant="contained"
            component="a"
            href="https://ehab-elshahat.github.io/h2portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
              color: "#fff",
              fontWeight: "bold",
              px: 3,
              py: 1.2,
              borderRadius: 3,
              textTransform: "none",
              boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
              transition: "all 0.35s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                background: "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)",
                transform: "scale(1.08)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
              },
            }}
          >
            Visit My Portfolio
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
