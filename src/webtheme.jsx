import { createTheme } from '@mui/material/styles';
const webtheme = createTheme({
    
    palette: {
        primary: {
            light: '#757ce8',
            main: '#FFFFFF',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
      },
});
export default webtheme;