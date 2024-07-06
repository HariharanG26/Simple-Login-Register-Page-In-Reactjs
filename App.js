// src/App.js

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { amber, deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: deepOrange[900],
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.1rem",
    },
  },
});

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
