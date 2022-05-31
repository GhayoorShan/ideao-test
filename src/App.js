import "./App.css";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import ListMembers from "./pages/ListMembers";
import React from "react";
import axios from "axios";
import WalletCard from "./components/WalletCard";
const theme = createTheme({
  palette: {
    primary: {
      main: "#242424",
    },
    neutral: {
      main: "#AEFB2A",
      contrastText: "#57EBDE",
    },
  },
  myColor: {
    color: "red",
  },
});
function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/members", element: <ListMembers /> },
  ]);
  return routes;
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
