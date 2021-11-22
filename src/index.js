import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  CssBaseline,
  ThemeProvider
} from '@mui/material';
import  LoadingScreenProvider from './context/LoadingScreenContext';
import theme from './theme';
import SnackbarProvider from './context/SnackbarContext';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <LoadingScreenProvider>
      <React.StrictMode>
        <CssBaseline />
            <App />
      </React.StrictMode>
      </LoadingScreenProvider>
    </SnackbarProvider>
  </ThemeProvider>,

  document.getElementById('root')
);