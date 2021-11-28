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
import AuthProvider from './context/AuthContext';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <SnackbarProvider>
        <LoadingScreenProvider>
        <React.StrictMode>
          <CssBaseline />
              <App />
        </React.StrictMode>
        </LoadingScreenProvider>
      </SnackbarProvider>
    </AuthProvider>
  </ThemeProvider>,

  document.getElementById('root')
);