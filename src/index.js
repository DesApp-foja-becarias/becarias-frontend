import React from 'react';
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
import { DialogProvider } from './context/DialogContext';



ReactDOM.render(
  <ThemeProvider theme={theme}>
		<DialogProvider>
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
		</DialogProvider>
  </ThemeProvider>,

  document.getElementById('root')
);