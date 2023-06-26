import { Button, styled } from '@mui/material'
import { fontColor, primaryColor } from '../vars.ts'

const CustomisedButton = styled(Button)({
  backgroundColor: primaryColor,
  '&:hover': { backgroundColor: primaryColor },
  color: fontColor,
  borderRadius: 35,
  fontSize: '16px',
  width: '100px',
  height: '40px',
  textTransform: 'capitalize',
})

export default CustomisedButton
