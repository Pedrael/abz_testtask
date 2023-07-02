import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import { Card } from './Card.tsx'
import { InfoCard } from '../types'
import CustomisedButton from './DefaultButton.tsx'
import { MouseEventHandler } from 'react'
import { truncateString } from '../util.ts'

interface CardsListProps {
  cards: Array<InfoCard>
  onClick: MouseEventHandler<HTMLButtonElement>
  isLoading: boolean
}

export const CardsList = ({ cards, isLoading, onClick }: CardsListProps) => {
  return (
    <Stack alignItems="center">
      <Typography fontSize="40px" marginTop="140px" mb="50px">
        Working with GET request
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="29px"
        justifyContent="center"
        mb="50px"
      >
        {cards.map(({ id, name, email, phone, position, photo }) => (
          <Card
            key={id}
            id={id}
            name={truncateString(name, 20)}
            position={position}
            email={truncateString(email, 20)}
            phone={phone}
            photo={photo}
          />
        ))}
      </Box>
      <Box display="flex" alignItems="center">
        <CustomisedButton onClick={onClick}>Show more</CustomisedButton>
        {isLoading && (
          <CircularProgress
            color="primary"
            size={20}
            sx={{ marginRight: '-30px', marginLeft: '10px' }}
          />
        )}
      </Box>
    </Stack>
  )
}
