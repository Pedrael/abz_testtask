import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import DefaultTextField from './DefaultTextField'
import CustomisedButton from './DefaultButton'
import { ImageUpload } from './ImageUpload'
import { ChangeEvent, ReactNode, useState } from 'react'
import { ImageData } from '../types'
import InputMask from 'react-input-mask'
import { useAsyncEffect } from '../useAcyncEffect'
import { fetchRequest, fetchRequest2 } from '../requester'
import { RequestMethods } from '../contstants'
import { useNavigate } from 'react-router-dom'
import { parseRegExp } from '../util'

type positionsResopnse = {
  positions: Array<radioButton>
}

type tokenResponse = {
  token: string
}

type radioButton = {
  id: number
  name: string
}

interface SignupProps {
  onRefresh: () => void
}

export const SignupForm = ({ onRefresh }: SignupProps) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [isNameValid, setNameValid] = useState<boolean>(true)
  const [email, setEmail] = useState('')
  const [isEmailValid, setEmailValid] = useState<boolean>(true)
  const [phone, setPhone] = useState('')
  const [isPhoneValid, setPhoneValid] = useState<boolean>(true)
  const [photo, setPhoto] = useState<ImageData>()
  const [isPhotoValid, setPhotoValid] = useState<boolean>(true)
  const [posId, setPosId] = useState('')
  const [radio, setRadio] = useState<Array<radioButton>>([])
  const radioURL =
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
  const usersURL =
    'https://frontend-test-assignment-api.abz.agency/api/v1/users'
  const tokenURL =
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const isSubmitDisabled =
    !name ||
    !email ||
    !phone ||
    !photo ||
    !isNameValid ||
    !isEmailValid ||
    !isPhoneValid ||
    !isPhotoValid

  useAsyncEffect(async () => {
    const { positions } = await fetchRequest<positionsResopnse>(radioURL, {
      method: RequestMethods.get,
    })
    setRadio([...positions])
  }, [])

  const handleNameChange = ({
    // done!
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setName(value)
    setNameValid(value.length < 2 || value.length > 60 ? false : true)
  }

  const handleEmailChange = ({
    // done!
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEmail(value)
    setEmailValid(emailPattern.test(value))
  }

  const handlePhoneChange = ({
    // done!
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setPhone(value)
    setPhoneValid(value.length !== 19 ? false : true)
  }

  const handleImageChange = (image: ImageData, isImageValid: boolean) => {
    //TODO
    setPhoto(image)
    setPhotoValid(isImageValid)
    console.log(image, isImageValid, 'signupform')
  }

  const handleRadioGroup = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setPosId(value) // fixed!
  }

  const handleSubmit = async () => {
    const { token } = await fetchRequest<tokenResponse>(tokenURL, {
      method: RequestMethods.get,
    })
    //navigate('/success')
    console.log(onRefresh, 'REFRESH')

    onRefresh()
    const result = await fetchRequest2<positionsResopnse>(usersURL, {
      method: RequestMethods.post,
      headers: {
        Token: token,
      },
      //body: formData,
      body: {
        name: name,
        email: email,
        phone: parseRegExp(phone, new RegExp('[^ )(-]+', 'g')),
        photo: photo,
        position_id: posId,
      },
    })
  }

  return (
    <Stack alignItems="center" mt="140px">
      <FormControl>
        <Typography mb="50px" fontSize="40px">
          Working with POST request
        </Typography>
        <DefaultTextField
          color={isNameValid ? 'primary' : 'error'}
          required
          label="Your name"
          value={name}
          onChange={handleNameChange}
          sx={{ marginBottom: '50px' }}
        ></DefaultTextField>
        <DefaultTextField
          color={isEmailValid ? 'primary' : 'error'}
          required
          label="Email"
          value={email}
          onChange={handleEmailChange}
          sx={{ marginBottom: '50px' }}
        ></DefaultTextField>
        <InputMask
          mask="+38 (099) 999-99-99"
          maskChar={null}
          value={phone}
          onChange={handlePhoneChange}
        >
          {
            (() => (
              <DefaultTextField
                color={isPhoneValid ? 'primary' : 'error'}
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
          name="radio-buttons-group"
          onChange={handleRadioGroup}
          value={posId}
        >
          {radio.length &&
            radio.map(({ id, name }, index) => {
              !posId && setPosId(String(id))
              return (
                <FormControlLabel
                  key={id}
                  value={id}
                  control={<Radio color="secondary" />}
                  label={name}
                  checked={!posId ? index === 0 : String(posId) === String(id)}
                />
              )
            })}
        </RadioGroup>
        <ImageUpload onImageLoad={handleImageChange} />
        <CustomisedButton
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
          sx={{ alignSelf: 'center', marginBottom: '100px' }}
        >
          Sign Up
        </CustomisedButton>
      </FormControl>
    </Stack>
  )
}
