import createTheme from '@mui/material/styles/createTheme'
import './styles/fonts.scss'
import { fontFamily } from './contstants.ts'

export const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
})
