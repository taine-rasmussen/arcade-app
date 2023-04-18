import { Box, useTheme, useMediaQuery } from '@mui/material';
import { CreateImageRequestResponseFormatEnum } from 'openai';
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

const test = [
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
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const GameContext = createContext();

const TicTacToe = () => {

  const theme = useTheme();
  const main = theme.palette.background.main
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const loggedInUsername = useSelector((state) => state.user.username)
  const initialState = {
    game: INITGAME,
    isGameOver: false,
    playerTurn: true,
    isSinglePlayerMode: false,
    players: [{ name: loggedInUsername }, { name: 'Player Two' }]
  }

  const reducer = (state, action) => {
    if (typeof (action) === 'number') {
      if (state.isGameOver) return;
      const updateGame = (game) => {
        for (let i = 0; i < game.length; i++) {
          if (game[i].id == action) {
            game[i].value = state.playerTurn ? 'X' : 'O'
          }
        }
        return game
      }
      return {
        ...state,
        game: updateGame(state.game),
        playerTurn: !state.playerTurn
      }
    } else if (action === 'checkWin') {
      for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        const cellA = state.game.find(cell => cell.id === a);
        const cellB = state.game.find(cell => cell.id === b);
        const cellC = state.game.find(cell => cell.id === c);

        if (cellA.value && cellA.value === cellB.value && cellB.value === cellC.value) {
          return { ...state, isGameOver: true }
        } else {
          return { ...state }
        }
      }
    } else if (action === 'reset') {
      return {
        ...state,
        playerTurn: true,
        isGameOver: false,
        game: Array.from({ length: 9 }, (_, i) => ({
          value: '',
          id: i
        }))
      }
    }

    else {
      throw Error('Unknown action.');
    }
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
