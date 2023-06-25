import createTheme from '@mui/material/styles/createTheme'
import './styles/fonts.scss'
import {
  fontColor,
  fontFamily,
  primaryColor,
  secondaryColor,
  backgroundColor,
} from './vars.ts'

export const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
      light: primaryColor,
      dark: primaryColor,
      contrastText: fontColor,
    },
    secondary: {
      main: secondaryColor,
      light: secondaryColor,
      dark: secondaryColor,
      contrastText: fontColor,
    },
    background: {
      paper: backgroundColor,
      default: backgroundColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          backgroundColor: primaryColor,
          color: fontColor,
          borderRadius: 35,
        }),
      },
    },
  },
})
