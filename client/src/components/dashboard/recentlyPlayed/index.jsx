import { Box, useTheme, Typography } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import { useSelector } from 'react-redux'
import GameCard from './gameCard'

const RecentlyPlayed = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt


  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)
  console.log(recentlyPlayed)

  return (
    <WidgetWrapper
      bg={alt}
      width={100}
      height={50}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        transition: 'ease-out all 0.35s',
      }}>
      <Box
        sx={{
          width: '20%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        Recently played
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '1.5rem'
        }}
      >
        {recentlyPlayed.map((game, i) => (
          <GameCard
            game={game}
            key={i}
          />
        ))}
      </Box>
    </WidgetWrapper >
  )
}

export default RecentlyPlayed


// Store an array of the previous n games. Display each game as card with some brief info about the game.
// When we reach limit n pop the last item off the array and enter the new one
// Make this list longer than the Component and use a slider to scroll through them