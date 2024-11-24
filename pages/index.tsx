import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #f0f4ff, #ffffff)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#3C50E0",
              mb: 2,
              fontFamily: "Satoshi, sans-serif",
            }}
          >
            Welcome to the Test Score Management System!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6577F3",
              fontFamily: "Satoshi, sans-serif",
            }}
          >
            Use the menu on the left to navigate through the features.
          </Typography>
        </Box>
      </Paper>
    </Layout>
  );
}
