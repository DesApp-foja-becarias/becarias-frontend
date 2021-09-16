import { createTheme } from '@material-ui/core';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#57a42d',
    },
    secondary: {
      main: '#389fc6',
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
    // use lato font in material ui
    fontFamily: 'Lato, sans-serif',
  },


};
// Acá podrían reemplazarse los colores y tipografías del tema, y eso se va a reflejar en toda la aplicación.
const theme = createTheme(themeOptions);

export default theme;
