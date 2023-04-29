import { Box, useTheme, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import GameCard from './gameCard'

const SwiperWidget = () => {

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

  return (
    <Box
      sx={{
        gap: '1rem',
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
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
