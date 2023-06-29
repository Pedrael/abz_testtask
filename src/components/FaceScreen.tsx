import Box from '@mui/material/Box'
import '../contstants.ts'
import React from 'react'
import Bg from '../assets/pexels-alexandr-podvalny-1227513.jpeg'
import { Stack, Typography } from '@mui/material'
import CustomisedButton from './CustomisedButton.tsx'

interface FaceScreenProps {}

const FaceScreen: React.FC<FaceScreenProps> = () => {
  return (
    <Box
      position="relative"
      width="100%"
      maxWidth="1170px"
      height="650px"
      minHeight="500px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'relative',
        backgroundImage: `url(${Bg})`,
        backgroundColor: 'rgba(0,0,0,50%)',
        backgroundSize: 'cover',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      <Stack maxWidth="380px" alignItems="center">
        <Typography
          color="white"
          fontSize="40px"
          lineHeight="40px"
          zIndex="1"
          textAlign="center"
          mb="21px"
        >
          Test assignment for front-end developer
        </Typography>
        <Typography
          color="white"
          fontSize="16px"
          lineHeight="26px"
          zIndex="1"
          textAlign="center"
          mb="32px"
        >
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Typography>
        <CustomisedButton>Sign up</CustomisedButton>
      </Stack>
    </Box>
  )
}

export default FaceScreen
