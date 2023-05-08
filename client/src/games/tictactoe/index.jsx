import { useReducer, createContext, useEffect, useMemo } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
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
];

const winCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

export const GameContext = createContext();

const TicTacToe = () => {

  const theme = useTheme();
  const dark = theme.palette.primary.dark
  const isNonMobileScreens = useMediaQuery('(min-width:1150px)');
  const loggedInUsername = useSelector((state) => state.user.username)
  const initialState = {
    game: INITGAME,
    isGameOver: false,
    playerTurn: true,
    isSinglePlayerMode: false,
    session: [],
    players: [{ name: loggedInUsername }, { name: 'Player Two' }]
  }


  const handleBotMove = (game) => {

    if (game[4].value === '') {
      return [...game, game[4].value = 'O']
    }





    return game
  }

  const reducer = (state, action) => {
    if (action.type === 'play') {
      if (!state.isSinglePlayerMode || state.isSinglePlayerMode && state.playerTurn) {
        const updateGame = (game) => {
          for (let i = 0; i < game.length; i++) {
            if (game[i].id == action.payload) {
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
      }
    } else if (action.type === 'playBot') {
      return {
        ...state,
        game: handleBotMove(state.game),
        playerTurn: true
      }

    } else if (action.type === 'checkWin') {
      console.log('win check firing')
      for (const winCombo of winCombinations) {
        const winValues = winCombo.map(id => {
          const gameObj = state.game.find(obj => obj.id === id);
          return gameObj ? gameObj.value : null;
        });
        if (winValues.every(val => val === 'X') || winValues.every(val => val === 'O')) {
          return {
            ...state,
            isGameOver: true,
            session: [...state.session, { winner: !state.playerTurn, gameState: state.game, winCells: winCombo }]
          }
        }
      }
      return {
        ...state
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
    } else if (action.type === 'update2pName') {
      return {
        ...state,
        players: [initialState.players[0], { name: action.payload }],
      }
    } else if (action.type === 'toggleGameMode') {
      return {
        ...state,
        isSinglePlayerMode: !state.isSinglePlayerMode
      }
    } else if (action.type === 'draw') {
      return {
        ...state,
        isGameOver: true,
        session: [...state.session, { winner: 'Tie', gameState: state.game, winCells: [] }]
      }
    } else {
      throw Error('Unknown action.');
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);



  useEffect(() => {
    const allMovesPlayed = state.game.filter(i => i.value != '')
    if (allMovesPlayed.length === 9 && !state.isGameOver) {
      dispatch({ type: 'draw' })
    }

    if (state.isSinglePlayerMode && !state.playerTurn && !state.isGameOver) {
      dispatch({ type: 'playBot' })
    }
  }, [state.playerTurn])

  useEffect(
    () => {
      dispatch('reset')
    }, []
  );


  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Box
        sx={{
          gap: '3rem',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          background: dark,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: isNonMobileScreens ? 'row' : 'column',
        }}
      >
        {isNonMobileScreens
          ? (
            <>
              <Menu />
              <Gameboard />
            </>
          )
          : (
            <>
              {'asdf'}
              <Gameboard />
            </>
          )}
      </Box>
    </GameContext.Provider >
  )
}

export default TicTacToe
