import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, useTheme, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ game }) => {

  const theme = useTheme();
  const navigate = useNavigate();
  const highlight = theme.palette.primary.highlight
  const dark = theme.palette.primary.dark

  console.log(game)

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
          height: '60%',
          width: '100%',
          display: 'flex',
          background: '#fff',
          borderRadius: '2rem',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h2'
          color={dark}
          onClick={() => { navigate(`/${game}`) }}
          sx={{
            '&:hover': {
              cursor: 'pointer'
            }
          }}
        >
          {game.title}
        </Typography>
      </Box>
    </Box>
  )
}

export default GameCard
