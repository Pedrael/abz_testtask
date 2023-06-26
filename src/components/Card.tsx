import { Avatar, Stack } from '@mui/material'
import { CustomisedTypography } from './CustomisedTypography'
import { fontFamily } from '../vars'
import { InfoCard } from '../types'

type InfoCardProps = InfoCard // made in order to save incapsulation of types

export function Card({
  imgURL,
  title,
  description,
  email,
  phone,
}: InfoCardProps) {
  return (
    <Stack
      maxWidth="370px"
      minWidth="282px"
      alignItems="center"
      padding="20px"
      borderRadius="10px"
      sx={{ backgroundColor: 'white', flexShrink: 1 }}
    >
      <Avatar
        src={imgURL}
        sx={{ width: '70px', height: '70px', marginBottom: '20px' }}
      ></Avatar>
      <CustomisedTypography
        fontSize="16px"
        fontFamily={fontFamily}
        sx={{ marginBottom: '20px' }}
      >
        {title}
      </CustomisedTypography>
      <CustomisedTypography fontSize="16px" fontFamily={fontFamily}>
        {description}
      </CustomisedTypography>
      <CustomisedTypography fontSize="16px" fontFamily={fontFamily}>
        {email}
      </CustomisedTypography>
      <CustomisedTypography fontSize="16px" fontFamily={fontFamily}>
        {phone}
      </CustomisedTypography>
    </Stack>
  )
}
