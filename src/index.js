import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider
} from '@mui/material';
import DatosBecariaContext from './context/DatosBecariaContext';
import DatosTutorContext from './context/DatosTutorContext';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
        <DatosTutorContext>
        <DatosBecariaContext>
          <App />
        </DatosBecariaContext>
        </DatosTutorContext>
      </Suspense>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);