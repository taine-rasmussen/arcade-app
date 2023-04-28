import { Box, useTheme, Typography } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import { useSelector } from 'react-redux'
import GameCard from './gameCard'

const RecentlyPlayed = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt
  const hightlight = theme.palette.primary.hightlight

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

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
          gap: '3rem',
          width: '20%',
          height: '90%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box>
          <Typography variant='h2'>
            Recently
          </Typography>
          <Typography variant='h2'>
            Played
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '60%',
          }}
        >
          <Typography
            variant='h4'
          >
            What you've been <span style={{ color: hightlight }}>loving</span> recently
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '80%',
          height: '80%',
          gap: '1.5rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
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