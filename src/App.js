import "./App.css";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageCropper from "./components/ImageCropper";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
