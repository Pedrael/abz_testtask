import { Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import SuccessImg from '../assets/success-image.svg'

export const Success = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="80vh">
      <Typography fontSize="40px" mb="50px">
        User successfully registered
      </Typography>
      <Box component="img" src={SuccessImg} alt="success image" width="380px" />
    </Stack>
  )
}
