import { Box, useTheme, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import GameCard from './gameCard'

const SwiperWidget = () => {

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

  return (
    <Box
      sx={{
        maxWidth: '60%',
        height: '100%',
        dispaly: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'relative'
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
