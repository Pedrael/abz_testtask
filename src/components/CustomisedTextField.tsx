import { TextField, styled } from '@mui/material'
import { textFieldBorder } from '../vars'

const CustomisedTextField = styled(TextField)({
  //   '& label.Mui-focused': {
  //     color: textFieldBorder,
  //   },
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: 'red',
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       color: textFieldBorder,
  //     },
  //     '&:hover fieldset': {
  //       color: textFieldBorder,
  //     },
  //     '&.Mui-focused fieldset': {
  //       color: textFieldBorder,
  //     },
  '& .MuiInputBase-root': {
    // Styles for the input element
  },
  '& .MuiInputBase-root:focus': {
    // Styles for the input element when focused
    // Customize the styles as per your requirements
    borderColor: 'D0cfcf',
  },
})

export default CustomisedTextField
