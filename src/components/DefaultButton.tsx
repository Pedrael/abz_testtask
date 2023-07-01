import { Button, styled } from '@mui/material'
import { fontColor, primaryColor } from '../contstants.ts'

const DefaultButton = styled(Button)({
  backgroundColor: primaryColor,
  '&:hover': { backgroundColor: primaryColor },
  color: fontColor,
  borderRadius: 35,
  fontSize: '16px',
  minWidth: '100px',
  height: '40px',
  padding: '18px',
  textTransform: 'capitalize',
  '&.Mui-disabled': {
    backgroundColor: '#B4B4B4',
    color: 'white',
    cursor: 'not-allowed',
  },
})

export default DefaultButton
