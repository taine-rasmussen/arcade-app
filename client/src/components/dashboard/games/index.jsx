import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';
import { setRecentlyPlayed } from '../../../state/index';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Games = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const light = theme.palette.primary.light

  const navToGame = (game) => {
    navigate(`/${game}`)
    dispatch(setRecentlyPlayed({ game: game }))
  }

  return (
    <WidgetWrapper
      bg={light}
      width={77}
      height={100}
      sx={{ transition: 'ease-out all 0.35s' }}
    >
      <Box
        onClick={() => { navToGame('TicTacToe') }}
      >
        <Typography
          variant='h1'
          color='white'
        >
          TicTacToe
        </Typography>
      </Box>
    </WidgetWrapper >
  )
}

export default Games
