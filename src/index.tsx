import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import "./common/i18n";
import { App } from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
