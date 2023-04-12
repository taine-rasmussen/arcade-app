import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import { motion } from 'framer-motion';

import GameboardCell from './gameboardCell'

const Gameboard = (props) => {

  const {
    game,
    setGame,
    isGameOver,
    playerTurn,
    setPlayerTurn,
    setIsGameOver,
    isSinglePlayerMode,
  } = props

  const theme = useTheme();
  const main = theme.palette.primary.main

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <motion.div
      animate={{ y: ['1000px', '0px'] }}
      style={{ height: '75%', width: '45%', zIndex: '3' }}
      transition={{ duration: 1 }}
    >
      <WidgetWrapper
        width={100}
        height={100}
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
              setIsGameOver={setIsGameOver}
              setPlayerTurn={setPlayerTurn}
              isSinglePlayerMode={isSinglePlayerMode}
            />
          ))}

        </Box>
      </WidgetWrapper>
    </motion.div>
  )
}

export default Gameboard
