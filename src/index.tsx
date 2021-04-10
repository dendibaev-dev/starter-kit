import { ThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import "./common/i18n";
import theme from './common/theme';
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
