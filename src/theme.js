import { createTheme } from '@mui/material/styles';

export const themeOptions = {
	root: {
		'&::-webkit-scrollbar': {
			width: '0.5rem',
		height: '0.5rem',
		background: '#cccccc',
		borderRadius: '0.5rem',
		}
	},
  palette: {
    type: 'light',
    primary: {
      main: '#66BB6A',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#4DD0E1',
    },
    info: {
      main: '#2196f3',
    },
    divider: 'rgba(0,0,0,0.12)',
    error: {
      main: '#f44336',
    },
    
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h3:{
      fontSize: '2.5rem',
      fontWeight: '700',
    },
    h4:{
      fontWeight: 700,
      fontSize: '2rem',
      
      color:'#35919D'
    },
    h5:{
      
      fontSize: '1.5rem',
      fontWeight: 400,
      color:'#4DD0E1'
    },
    h6:{
      color:'#35919D'

    },
    subtitle1:{
      fontSize: '1.3rem',
      color: '#c2c2c2',
    },   
  },
  


};
// Acá podrían reemplazarse los colores y tipografías del tema, y eso se va a reflejar en toda la aplicación.
const theme = createTheme(themeOptions);

export default theme;
