import { ThemeProvider } from "@material-ui/core";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import theme from "./Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
