import { Box, useTheme } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import { useSelector } from 'react-redux'

const RecentlyPlayed = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt


  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)
  return (
    <WidgetWrapper
      bg={alt}
      width={100}
      height={50}

      sx={{ transition: 'ease-out all 0.35s' }}>
      <Box>
        Recently played
      </Box>
    </WidgetWrapper>
  )
}

export default RecentlyPlayed


// Store an array of the previous n games. Display each game as card with some brief info about the game.
// When we reach limit n pop the last item off the array and enter the new one
// Make this list longer than the Component and use a slider to scroll through them