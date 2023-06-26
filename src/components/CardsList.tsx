import { Box, Stack } from '@mui/material'
import { Card } from './Card.tsx'
import { InfoCard } from '../types'
import { CustomisedTypography } from './CustomisedTypography'
import CustomisedButton from './CustomisedButton.tsx'

interface CardsListProps {
  cards: Array<InfoCard>
}

export function CardsList({ cards }: CardsListProps) {
  return (
    <Stack alignItems="center">
      <CustomisedTypography fontSize="40px" marginTop="140px" mb="50px">
        Working with GET request
      </CustomisedTypography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="29px"
        justifyContent="center"
        mb="50px"
      >
        {cards.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            email={item.email}
            phone={item.phone}
          />
        ))}
      </Box>
      <CustomisedButton>Show more</CustomisedButton>
    </Stack>
  )
}
