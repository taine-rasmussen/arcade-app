import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import { motion } from 'framer-motion';

import GameboardCell from './gameboardCell'

const Gameboard = (props) => {

  const {
    game,
    setGame,
    players,
    isGameOver,
    playerTurn,
    setPlayerTurn,
    setIsGameOver,
    setCurrentWinner,
    isSinglePlayerMode,
  } = props

  const theme = useTheme();
  const main = theme.palette.background.main

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <motion.div
      animate={{ y: ['-1500px', '0px'] }}
      style={{ height: '75%', width: '45%', zIndex: '3' }}
      transition={{ duration: 1 }}
    >
      <WidgetWrapper
        width={100}
        height={100}
        theme={theme}
        style={{ padding: '0px' }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridGap: '15px',
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
              players={players}
              setGame={setGame}
              isGameOver={isGameOver}
              playerTurn={playerTurn}
              setIsGameOver={setIsGameOver}
              setPlayerTurn={setPlayerTurn}
              setCurrentWinner={setCurrentWinner}
              isSinglePlayerMode={isSinglePlayerMode}
            />
          ))}

        </Box>
      </WidgetWrapper>
    </motion.div>
  )
}

export default Gameboard
