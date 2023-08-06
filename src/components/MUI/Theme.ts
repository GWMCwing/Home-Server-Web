import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00bed3',
    },
    secondary: {
      main: '#d31500',
    },
    error: {
      main: '#d300be',
    },
    info: {
      main: '#0054d3',
    },
    status: {
      disabled: '#4f7b80',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#1a1a1a',
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: '#00bed3',
    },
  },
});
