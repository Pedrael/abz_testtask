import createTheme from "@mui/material/styles/createTheme"
import './styles/fonts.scss'

const primaryColor = "#F4E041"
const secondaryColor = "#00BDD3"
const fontColor = "#000"
const backgroundColor = "#F8F8F8"
const fontFamily = "Nunito Variable"

export const theme = createTheme({
    typography: {
        fontFamily: fontFamily,
    },
    palette: {
        mode: "light",
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
            }
        }
    }
    
})