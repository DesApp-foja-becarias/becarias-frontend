import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider
} from '@mui/material';
import theme from './theme';
import SnackbarProvider from './context/SnackbarContext';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <React.StrictMode>
        <CssBaseline />
        <Suspense fallback={<CircularProgress />}>
            <App />
        </Suspense>
      </React.StrictMode>
    </SnackbarProvider>
  </ThemeProvider>,

  document.getElementById('root')
);