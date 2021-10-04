import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider
} from '@mui/material';
import DatosBecariaContext from './context/DatosBecariaContext';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
        <DatosBecariaContext>
          <App />
        </DatosBecariaContext>
      </Suspense>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
