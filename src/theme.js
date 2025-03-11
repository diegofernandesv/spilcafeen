import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: 'Aeonik, sans-serif',
  },
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default theme;
