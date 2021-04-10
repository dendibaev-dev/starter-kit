import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./common/i18n";
import theme from "./common/theme";
import { App } from "./components/App";
import Preloader from "./components/preloader";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<Preloader />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
