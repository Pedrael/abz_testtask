import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { CustomisedAppBar } from './components/CustomisedAppBar'
import FaceScreen from './components/FaceScreen'
import { CardsList } from './components/CardsList'
import { backgroundColor } from './contstants'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: { backgroundColor } }}>
        <CssBaseline />
        <Box display="flex" alignItems="center" flexDirection="column">
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
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
