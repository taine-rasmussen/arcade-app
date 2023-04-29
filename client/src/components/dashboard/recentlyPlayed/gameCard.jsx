import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, useTheme, Typography } from '@mui/material';

const GameCard = ({ game }) => {

  const theme = useTheme();
  const hightlight = theme.palette.primary.hightlight

  return (
    <>
      <Box
        sx={{
          zIndex: '3',
          width: '20px',
          height: '20px',
          display: 'flex',
          padding: '15px',
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
          height: '80%',
          width: '90%',
          background: '#fff',
          borderRadius: '2rem',
        }}
      >
        {game}
      </Box>
    </>
  )
}

export default GameCard
