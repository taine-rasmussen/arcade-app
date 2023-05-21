import { useSelector } from 'react-redux'
import { Box } from '@mui/material';
import GameCard from './gameCard'

const RecentlyPLayedSlider = () => {

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

  return (
    <Box
      sx={{
        gap: '2rem',
        width: '100%',
        display: 'flex',
        overflow: 'scroll',
        flexDirection: 'row',
        justifyContent: 'space-between',
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

export default RecentlyPLayedSlider
