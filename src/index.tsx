import { StylesProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./common/i18n";
import store from "./common/store";
import theme from "./common/theme";
import { App } from "./components/App";
import Preloader from "./components/preloader";

ReactDOM.render(
  <StylesProvider injectFirst>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Suspense fallback={<Preloader />}>
              <CssBaseline />
              <App />
            </Suspense>
          </SnackbarProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </StylesProvider>,
  document.getElementById("root")
);
