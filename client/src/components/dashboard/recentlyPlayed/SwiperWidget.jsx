import { Box, useTheme, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import GameCard from './gameCard'

const SwiperWidget = () => {

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden'
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
