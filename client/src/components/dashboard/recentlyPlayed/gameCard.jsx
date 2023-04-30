import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, useTheme, Typography } from '@mui/material';

const GameCard = ({ game }) => {

  const theme = useTheme();
  const highlight = theme.palette.primary.highlight

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          zIndex: '3',
          width: '70px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          background: highlight,
          borderRadius: '0.75rem',
          justifyContent: 'center',
          margin: '0px 0px -35px 35px',
        }}
      >
        <EmojiEventsIcon sx={{ color: '#fff', fontSize: '2rem' }} />
      </Box>
      <Box
        sx={{
          zIndex: '1',
          width: '100%',
          height: '60%',
          borderRadius: '2rem',
          background: '#fff',
        }}
      >
      </Box>
    </Box>
  )
}

export default GameCard
