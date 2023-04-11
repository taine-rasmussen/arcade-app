import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
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

  const [game, setGame] = useState(INITGAME)
  const [playerTurn, setPlayerTurn] = useState(1)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isSinglePlayerMode, setIsSinglePlayerMode] = useState(false);
  const [players, setPlayers] = useState([{ name: loggedInUsername }, { name: 'playerTwo' }])

  const theme = useTheme();
  const navigate = useNavigate();
  const main = theme.palette.background.main
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const restGame = () => {

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
        <Menu
          setGame={setGame}
          players={players}
          setPlayers={setPlayers}
          playerTurn={playerTurn}
          isGameOver={isGameOver}
          setPlayerTurn={setPlayerTurn}
          isSinglePlayerMode={isSinglePlayerMode}
          setIsSinglePlayerMode={setIsSinglePlayerMode}
        />
        <Gameboard
          game={game}
          setGame={setGame}
          isGameOver={isGameOver}
          playerTurn={playerTurn}
          setIsGameOver={setIsGameOver}
          setPlayerTurn={setPlayerTurn}
          isSinglePlayerMode={isSinglePlayerMode}
        />
      </Box>
    </>
  )
}

export default TicTacToe
