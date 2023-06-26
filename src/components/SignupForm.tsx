import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import CustomisedTextField from './CustomisedTextField'
import CustomisedButton from './CustomisedButton'
import { CustomisedImageUpload } from './CustomisedImageUpload'

export function SignupForm() {
  return (
    <Stack alignItems="center" mt="140px">
      <FormControl>
        <Typography mb="50px">Working with POST request</Typography>{' '}
        {/*TODO: CustomisedTypography*/}
        <CustomisedTextField
          required
          label="Your name"
          sx={{ marginBottom: '50px' }}
        ></CustomisedTextField>
        <CustomisedTextField
          required
          label="Email"
          sx={{ marginBottom: '50px' }}
        ></CustomisedTextField>
        <CustomisedTextField
          required
          label="Phone"
          helperText="+38 (XXX) XXX - XX - XX"
          sx={{ marginBottom: '43px' }}
        ></CustomisedTextField>
        <FormLabel id="demo-radio-buttons-group-label">
          Select your position
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="frontend"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="frontend"
            control={<Radio />}
            label="Frontend developer"
          />
          <FormControlLabel
            value="backend"
            control={<Radio />}
            label="Backend developer"
          />
          <FormControlLabel
            value="designer"
            control={<Radio />}
            label="Designer"
          />
          <FormControlLabel value="QA" control={<Radio />} label="QA" />
        </RadioGroup>
        <CustomisedImageUpload />
        <CustomisedButton disabled>Sign Up</CustomisedButton>
      </FormControl>
    </Stack>
  )
}
