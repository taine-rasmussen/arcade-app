import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import { useState } from 'react';

import GameboardCell from './gameboardCell'

const Gameboard = (props) => {

  const {
    game,
    setGame,
    currentGame,
    setCurrentGame,
  } = props

  const [playerTurn, setPlayerTurn] = useState(true)

  const theme = useTheme();
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
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        {game.map((cell) => (
          <GameboardCell
            cell={cell}
            game={game}
            setGame={setGame}
            playerTurn={playerTurn}
            currentGame={currentGame}
            setPlayerTurn={setPlayerTurn}
          />
        ))}

      </Box>
    </WidgetWrapper>
  )
}

export default Gameboard
