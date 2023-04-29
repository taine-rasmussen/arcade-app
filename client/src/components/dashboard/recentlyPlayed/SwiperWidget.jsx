import { Box, useTheme, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import GameCard from './gameCard'

const SwiperWidget = () => {

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

  return (
    <Box
      sx={{
        gap: '1rem',
        display: 'flex',
        overflow: 'scroll',
        flexDirection: 'row',
      }}
    >
      {recentlyPlayed.map((game, i) => (
        <GameCard
          game={game}
          key={i}
        />
      ))}
    </Box >
  )
}

export default SwiperWidget
