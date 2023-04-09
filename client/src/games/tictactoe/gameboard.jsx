import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import { useState } from 'react';

import GameboardCell from './gameboardCell'

const Gameboard = (props) => {

  const {
    game,
    setGame,
    isGameOver,
    isSinglePlayerMode
  } = props

  const [playerTurn, setPlayerTurn] = useState(true)

  const theme = useTheme();
  const main = theme.palette.primary.main


  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <WidgetWrapper
      width={45}
      height={75}
      theme={theme}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          gridGap: '8px',
          display: 'grid',
          backgroundColor: main,
          gridTemplateRows: 'repeat(3, 1fr)',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {game.map((cell, i) => (
          <GameboardCell
            key={i}
            cell={cell}
            game={game}
            setGame={setGame}
            isGameOver={isGameOver}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            isSinglePlayerMode={isSinglePlayerMode}
          />
        ))}

      </Box>
    </WidgetWrapper>
  )
}

export default Gameboard
