import { Box, Stack, Typography } from '@mui/material'
import { Card } from './Card.tsx'
import { InfoCard } from '../types'
import CustomisedButton from './CustomisedButton.tsx'
import { v4 as uuidv4 } from 'uuid'

interface CardsListProps {
  cards: Array<InfoCard>
}

export function CardsList({ cards }: CardsListProps) {
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
        {cards.map(({ title, description, email, phone }) => (
          <Card
            key={uuidv4()}
            title={title}
            description={description}
            email={email}
            phone={phone}
          />
        ))}
      </Box>
      <CustomisedButton>Show more</CustomisedButton>
    </Stack>
  )
}
