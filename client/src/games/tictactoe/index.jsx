import { useReducer, createContext, useEffect } from 'react';
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

  const checkWin = (board, player) => {
    for (let i = 0; i < 9; i += 3) {
      if (board[i].value === player && board[i + 1].value === player && board[i + 2].value === player) {
        return true;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (board[i].value === player && board[i + 3].value === player && board[i + 6].value === player) {
        return true;
      }
    }
    if (board[0].value === player && board[4].value === player && board[8].value === player) {
      return true;
    }
    if (board[2].value === player && board[4].value === player && board[6].value === player) {
      return true;
    }
    return false;
  }

  const makeBotMove = (game, isGameOver) => {
    if (isGameOver) return game;

    const newGame = game.map(square => ({ ...square }));
    // Check center square
    if (newGame[4].value === '') {
      newGame[4].value = 'O';
      return newGame;
    }
    //Check for winning move
    for (let i = 0; i < 9; i++) {
      if (newGame[i].value === '') {
        newGame[i].value = 'O';
        if (checkWin(newGame, 'O')) {
          newGame[i].value = 'O';
          return newGame;
        }
        newGame[i].value = '';
      }
    };
    // Check for a blocking move
    for (let i = 0; i < 9; i++) {
      if (newGame[i].value === '') {
        newGame[i].value = 'X';
        if (checkWin(newGame, 'X')) {
          newGame[i].value = 'O';
          return newGame;
        }
        newGame[i].value = '';
      }
    }
    // Choose a random available square
    const availableSquares = newGame.filter(square => square.value === '');
    const randomIndex = Math.floor(Math.random() * availableSquares.length);
    newGame[randomIndex].value = 'O';
    return newGame;
  }


  const reducer = (state, action) => {
    if (action.type === 'playBot') {
      return {
        ...state,
        game: makeBotMove(state.game, state.isGameOver),
        playerTurn: !state.playerTurn
      }
    } else if (action.type === 'play') {
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
    } else if (action.type === 'checkWin') {
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
        isGameOver: false,
        playerTurn: true,
        isSinglePlayerMode: !state.isSinglePlayerMode,
        game: Array.from({ length: 9 }, (_, i) => ({
          value: '',
          id: i
        }))
      }
    } else if (action.type === 'draw') {
      return {
        ...state,
        isGameOver: true,
        session: [...state.session, { winner: 'Tie', gameState: state.game, winCells: [] }]
      }
    } else {
      return { ...state }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const allMovesPlayed = state.game.filter(i => i.value != '')
    if (allMovesPlayed.length === 9 && !state.isGameOver) {
      dispatch({ type: 'draw' })
    }
    if (state.isSinglePlayerMode && !state.playerTurn) {
      return dispatch({ type: 'playBot' });
    }
    dispatch({ type: 'checkWin' })
  }, [state.playerTurn, state.isSinglePlayerMode, state.isGameOver])

  useEffect(
    () => {
      dispatch('reset')
    }, []
  );

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Box
        sx={{
          gap: '3em',
          width: '100%',
          height: '100%',
          display: 'flex',
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
