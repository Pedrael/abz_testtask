import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import {Container, CssBaseline} from "@mui/material"
import { CustomisedAppBar } from "./components/CustomisedAppBar"
import FaceScreen from "./components/FaceScreen"

function App() {

  return (
    // <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      <Container>
        <CustomisedAppBar />
        <FaceScreen />
      </Container>
    </>
    // </ThemeProvider>
  )
}

export default App
