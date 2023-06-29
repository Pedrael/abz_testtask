import { Button, styled } from '@mui/material'
import { fontColor, primaryColor } from '../contstants.ts'

const CustomisedButton = styled(Button)({
  backgroundColor: primaryColor,
  '&:hover': { backgroundColor: primaryColor },
  color: fontColor,
  borderRadius: 35,
  fontSize: '16px',
  minWidth: '100px',
  height: '40px',
  padding: '18px',
  textTransform: 'capitalize',
})

export default CustomisedButton
