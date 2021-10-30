import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider
} from '@mui/material';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
          <App />
      </Suspense>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);