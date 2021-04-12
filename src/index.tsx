import { StylesProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./common/i18n";
import store from "./common/store";
import theme from "./common/theme";
import { App } from "./components/App";
import Preloader from "./components/preloader";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Suspense fallback={<Preloader />}>
            <CssBaseline />
            <App />
          </Suspense>
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
