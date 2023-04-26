import { Box, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setRecentlyPlayed } from '../../../state/index';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'

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
      border={true}
      sx={{ transition: 'ease-out all 0.35s' }}
    >
      <Box
        onClick={() => { navToGame('TicTacToe') }}
      >
        tictactoe
      </Box>
    </WidgetWrapper >
  )
}

export default Games
