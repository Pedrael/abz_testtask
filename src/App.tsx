import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { DefaultAppBar } from './components/DefaultAppBar'
import FaceScreen from './components/FaceScreen'
import { CardsList } from './components/CardsList'
import { RequestMethods, backgroundColor } from './contstants'
import { theme } from './theme'
import { useAsyncEffect } from './useAcyncEffect'
import { useState } from 'react'
import { fetchRequest } from './requester'
import { InfoCard } from './types'
import { SignupForm } from './components/SignupForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Success } from './components/Success'

type myResponse = {
  users: InfoCard[]
  links: {
    next_url: string | null
  }
}

const App = () => {
  const [cards, setCards] = useState<Array<InfoCard>>([])
  const [URL, setURL] = useState<string>(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
  )
  const [loader, setLoader] = useState<boolean>(false)

  useAsyncEffect(async () => {
    const {
      users,
      links: { next_url },
    } = await fetchRequest<myResponse>(URL, {
      method: RequestMethods.get,
    })
    setURL(next_url ?? '')
    setCards([...cards, ...users])
  }, [])

  const handleOnClick = async () => {
    setLoader(true)
    const {
      users,
      links: { next_url },
    } = await fetchRequest<myResponse>(URL, {
      method: RequestMethods.get,
    })
    setURL(next_url ?? '')
    setCards([...cards, ...users])
    setLoader(false)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: { backgroundColor } }}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                <Box display="flex" alignItems="center" flexDirection="column">
                  <DefaultAppBar />
                  <FaceScreen />
                  {cards.length && (
                    <CardsList
                      cards={cards}
                      onClick={handleOnClick}
                      isLoading={loader}
                    />
                  )}
                  <SignupForm />
                </Box>
              }
            />
            <Route path="/success" element={<Success />}></Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
