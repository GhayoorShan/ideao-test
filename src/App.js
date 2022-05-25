import "./App.css";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  input: {
    color: "#fff",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
