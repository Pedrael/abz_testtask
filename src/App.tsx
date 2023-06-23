import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import {Container, CssBaseline} from "@mui/material"
import { CustomisedAppBar } from "./components/CustomisedAppBar"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <CustomisedAppBar />
      </Container>
    </ThemeProvider>
  )
}

export default App
