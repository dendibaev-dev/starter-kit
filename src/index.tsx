import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
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
    <Provider store={store}>
      <Suspense fallback={<Preloader />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
