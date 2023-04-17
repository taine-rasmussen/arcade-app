import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useReducer, useContext } from 'react';
import { useSelector } from 'react-redux';
import Gameboard from './gameboard'
import Menu from './menu';

const INITGAME = [
  {
    id: 0,
    value: '',
  },
  {
    id: 1,
    value: '',
  },
  {
    id: 2,
    value: '',
  },
  {
    id: 3,
    value: '',
  },
  {
    id: 4,
    value: '',
  },
  {
    id: 5,
    value: '',
  },
  {
    id: 6,
    value: '',
  },
  {
    id: 7,
    value: '',
  },
  {
    id: 8,
    value: '',
  },
]

const TicTacToe = () => {

  const loggedInUsername = useSelector((state) => state.user.username)

  const theme = useTheme();
  const main = theme.palette.background.main
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const initialState = {
    game: INITGAME,
    isGameOver: false,
    playerTurn: false,
    isSinglePlayerMode: false,
    players: [{ name: loggedInUsername }, { name: 'Player Two' }]
  }

  return (
    <>
      <Box
        sx={{
          gap: '3rem',
          width: '100%',
          height: '100%',
          padding: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          background: main,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Menu />
        <Gameboard />
      </Box>
    </>
  )
}

export default TicTacToe
