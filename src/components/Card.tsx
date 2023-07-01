import { Avatar, Stack, Typography } from '@mui/material'
import { fontFamily } from '../contstants'
import { InfoCard } from '../types'

type InfoCardProps = InfoCard // made in order to save incapsulation of types

export const Card = ({
  photo,
  name,
  position,
  email,
  phone,
}: InfoCardProps) => {
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
        src={photo}
        sx={{ width: '70px', height: '70px', marginBottom: '20px' }}
      ></Avatar>
      <Typography
        fontSize="16px"
        fontFamily={fontFamily}
        sx={{ marginBottom: '20px' }}
      >
        {name}
      </Typography>
      <Typography fontSize="16px" fontFamily={fontFamily}>
        {position}
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
