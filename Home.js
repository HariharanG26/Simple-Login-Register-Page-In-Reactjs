// src/components/Home.js

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Container, Typography, Button, Box } from "@mui/material";

const Home = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to log out");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          You are successfully logged in.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogout}
          sx={{ mt: 2 }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
