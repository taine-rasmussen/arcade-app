import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import GameboardCell from './gameboardCell'
import { motion } from 'framer-motion';
import { GameContext } from './index'
import { useContext } from 'react';

const Gameboard = () => {

  const theme = useTheme();
  const main = theme.palette.background.main
  const alt = theme.palette.background.alt
  const { state: { game } } = useContext(GameContext)
  const isNonMobileScreens = useMediaQuery('(min-width:1150px)');

  return (
    <motion.div
      animate={{ y: ['-1500px', '0px'] }}
      style={{ height: '75%', width: isNonMobileScreens ? '45%' : '100%', zIndex: '3' }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 30,
        duration: 2,
      }}
    >
      <WidgetWrapper
        width={100}
        height={isNonMobileScreens ? 100 : null}
        border={false}
        style={{ padding: '0px', zIndex: '3' }}
      >
        <Box
          sx={{
            display: 'grid',
            backgroundColor: main,
            gridTemplateRows: 'repeat(3, 1fr)',
            gridTemplateColumns: 'repeat(3, 1fr)',
            width: '100%',
            height: '100%',
            gridGap: isNonMobileScreens ? '15px' : '5px',
          }}
        >
          {game.map((cell, i) => (
            <GameboardCell
              key={i}
              cell={cell}
            />
          ))}

        </Box>
      </WidgetWrapper>
    </motion.div>
  )
}

export default Gameboard
