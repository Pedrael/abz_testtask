import { TextField, styled } from '@mui/material'
import { textFieldBorder, fontSecondaryColor } from '../contstants'

const DefaultTextField = styled(TextField)(({ theme, color }) => ({
  '& label.Mui-focused': {
    color:
      color === 'primary'
        ? fontSecondaryColor
        : color === 'error'
        ? theme.palette.error.main
        : undefined, // Label color when focused
  },
  '& label': {
    color:
      color === 'primary'
        ? fontSecondaryColor
        : color === 'error'
        ? theme.palette.error.main
        : undefined, // Label color
  },
  '& .MuiFormHelperText-root': {
    color:
      color === 'primary'
        ? fontSecondaryColor
        : color === 'error'
        ? theme.palette.error.main
        : undefined, // Helper text color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor:
        color === 'primary'
          ? textFieldBorder
          : color === 'error'
          ? theme.palette.error.main
          : undefined, // Border color
      borderWidth: color === 'error' ? '2px' : '1px',
      borderStyle: 'solid',
      boxShadow: 'none',
    },
    '&:hover fieldset': {
      borderColor:
        color === 'primary'
          ? textFieldBorder
          : color === 'error'
          ? theme.palette.error.main
          : undefined, // Border color on hover
      borderWidth: color === 'error' ? ' 2px' : undefined,
    },
    '&.Mui-focused fieldset': {
      borderWidth: color === 'primary' ? '1px' : undefined,
      borderColor: color === 'primary' ? textFieldBorder : undefined, // Border color when focused
    },
  },
}))

export default DefaultTextField
