import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useReducer, createContext } from 'react';
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

export const GameContext = createContext();

const TicTacToe = () => {

  const theme = useTheme();
  const main = theme.palette.background.main
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const loggedInUsername = useSelector((state) => state.user.username)
  const initialState = {
    game: INITGAME,
    isGameOver: false,
    playerTurn: 0,
    isSinglePlayerMode: false,
    players: [{ name: loggedInUsername }, { name: 'Player Two' }]
  }

  const reducer = (state, action) => {
    console.log('REDUCER', action)
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
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
    </GameContext.Provider >
  )
}

export default TicTacToe
