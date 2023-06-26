import { Box, Container, CssBaseline } from '@mui/material'
import { CustomisedAppBar } from './components/CustomisedAppBar'
import FaceScreen from './components/FaceScreen'
import { CardsList } from './components/CardsList'
import { backgroundColor } from './vars'

function App() {
  return (
    <Box sx={{ backgroundColor: { backgroundColor } }}>
      <CssBaseline />
      <Container>
        <CustomisedAppBar />
        <FaceScreen />
        <CardsList
          cards={[
            {
              imgURL: '',
              title: 'Nigger',
              description: 'Nigger card',
              email: 'nigger@gmail.com',
              phone: '+38(050)1488666',
            },
            {
              imgURL: '',
              title: 'Nigger',
              description: 'Nigger card',
              email: 'nigger@gmail.com',
              phone: '+38(050)1488666',
            },
            {
              imgURL: '',
              title: 'Nigger',
              description: 'Nigger card',
              email: 'nigger@gmail.com',
              phone: '+38(050)1488666',
            },
            {
              imgURL: '',
              title: 'Nigger',
              description: 'Nigger card',
              email: 'nigger@gmail.com',
              phone: '+38(050)1488666',
            },
            {
              imgURL: '',
              title: 'Nigger',
              description: 'Nigger card',
              email: 'nigger@gmail.com',
              phone: '+38(050)1488666',
            },
            {
              imgURL: '',
              title: 'Nigger',
              description: 'Nigger card',
              email: 'nigger@gmail.com',
              phone: '+38(050)1488666',
            },
          ]}
        />
      </Container>
    </Box>
  )
}

export default App
