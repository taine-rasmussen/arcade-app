import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, useTheme, Typography } from '@mui/material';

const GameCard = ({ game }) => {

  const theme = useTheme();
  const hightlight = theme.palette.primary.hightlight

  return (
    <Box
      sx={{
        height: '60%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          width: '40px',
          height: '40px',
          display: 'flex',
          padding: '15px',
          alignItems: 'center',
          background: hightlight,
          borderRadius: '0.75rem',
          justifyContent: 'center',
        }}
      >
        <EmojiEventsIcon sx={{ color: '#fff' }} />
      </Box>
      <Box
        sx={{
          height: '60%',
          width: '80%',
          background: '#fff',
          borderRadius: '0.75rem',
        }}
      >
        {game}
      </Box>
    </Box>
  )
}

export default GameCard
