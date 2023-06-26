import { Container, CssBaseline } from '@mui/material'
import { CustomisedAppBar } from './components/CustomisedAppBar'
import FaceScreen from './components/FaceScreen'

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <CustomisedAppBar />
        <FaceScreen />
      </Container>
    </>
  )
}

export default App
