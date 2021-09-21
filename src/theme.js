import { createTheme } from '@mui/material/styles';

export const themeOptions = {

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
    h4:{
      fontSize: '410px',
      color:'red'
    }
    
  },
  


};
// Acá podrían reemplazarse los colores y tipografías del tema, y eso se va a reflejar en toda la aplicación.
const theme = createTheme(themeOptions);

export default theme;
