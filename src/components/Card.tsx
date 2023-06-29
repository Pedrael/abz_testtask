import { Avatar, Stack, Typography } from '@mui/material'
import { fontFamily } from '../contstants'
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
      <Typography
        fontSize="16px"
        fontFamily={fontFamily}
        sx={{ marginBottom: '20px' }}
      >
        {title}
      </Typography>
      <Typography fontSize="16px" fontFamily={fontFamily}>
        {description}
      </Typography>
      <Typography fontSize="16px" fontFamily={fontFamily}>
        {email}
      </Typography>
      <Typography fontSize="16px" fontFamily={fontFamily}>
        {phone}
      </Typography>
    </Stack>
  )
}
