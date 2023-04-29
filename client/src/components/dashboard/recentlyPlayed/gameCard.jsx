import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, useTheme, Typography } from '@mui/material';

const GameCard = ({ game }) => {

  const theme = useTheme();
  const hightlight = theme.palette.primary.hightlight

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          zIndex: '3',
          width: '50px',
          height: '50px',
          display: 'flex',

          alignItems: 'center',
          background: hightlight,
          borderRadius: '0.75rem',
          justifyContent: 'center',
          margin: '0px 0px -15px 30px',
        }}
      >
        <EmojiEventsIcon sx={{ color: '#fff', fontSize: '2rem' }} />
      </Box>
      <Box
        sx={{
          zIndex: '1',
          width: '150px',
          height: '150px',
          borderRadius: '2rem',
          background: '#fff',
        }}
      >
        {game}
      </Box>
    </Box>
  )
}

export default GameCard
