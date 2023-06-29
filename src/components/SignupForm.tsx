import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import CustomisedTextField from './CustomisedTextField'
import CustomisedButton from './CustomisedButton'
import { CustomisedImageUpload } from './CustomisedImageUpload'
import { ChangeEvent, ReactNode, useState } from 'react'
import { ImageData } from './CustomisedImageUpload'
import InputMask from 'react-input-mask'

export function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState<ImageData>()

  const isSubmitDisabled = !name || !email || !phone || !image

  const handleNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setName(value)
  }

  const handleEmailChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEmail(value)
  }

  const handlePhoneChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setPhone(value)
  }

  const handleImageChange = (image: ImageData) => {
    setImage(image)
  }

  const handleSubmit = () => {
    console.log('penis')
  }

  return (
    <form>
      <Stack alignItems="center" mt="140px">
        <FormControl>
          <Typography mb="50px" fontSize="40px">
            Working with POST request
          </Typography>
          <CustomisedTextField
            color="primary"
            required
            label="Your name"
            value={name}
            onChange={handleNameChange}
            sx={{ marginBottom: '50px' }}
          ></CustomisedTextField>
          <CustomisedTextField
            color="primary"
            required
            label="Email"
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: '50px' }}
          ></CustomisedTextField>
          <InputMask
            mask="+38 (999) 999-99-99"
            maskChar={null}
            value={phone}
            onChange={handlePhoneChange}
          >
            {
              (() => (
                <CustomisedTextField
                  color="primary"
                  required
                  label="Phone"
                  helperText="+38 (XXX) XXX - XX - XX"
                  sx={{ marginBottom: '43px' }}
                />
              )) as unknown as ReactNode
            }
          </InputMask>
          <Typography fontSize="16px" mb="6px">
            Select your position
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="frontend"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="frontend"
              control={<Radio color="secondary" />}
              label="Frontend developer"
            />
            <FormControlLabel
              value="backend"
              control={<Radio color="secondary" />}
              label="Backend developer"
            />
            <FormControlLabel
              value="designer"
              control={<Radio color="secondary" />}
              label="Designer"
            />
            <FormControlLabel
              value="QA"
              control={<Radio color="secondary" />}
              label="QA"
            />
          </RadioGroup>
          <CustomisedImageUpload onImageLoad={handleImageChange} />
          <CustomisedButton
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            sx={{ alignSelf: 'center', marginBottom: '100px' }}
          >
            Sign Up
          </CustomisedButton>
        </FormControl>
      </Stack>
    </form>
  )
}
