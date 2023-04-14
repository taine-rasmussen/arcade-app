import FlexBetween from '../../../wrapper/FlexBetween'
import { Box, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";


import ProfileCard from './ProfileCard';
import Settings from './Settings';

const Menu = (props) => {

  const {
    players,
    isGameOver,
    playerTurn,
    setPlayers,
  } = props;

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <Box
      sx={{
        gap: '2rem',
        width: '30%',
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        style={{ zIndex: '1' }}
        animate={{ y: ['300px', '0px'], opacity: 1 }}
        transition={{ type: 'tween', duration: 0.75, delay: 1.15 }}
      >
        <FlexBetween>
          {players.map((player, i) => (
            <ProfileCard
              key={i}
              player={player}
              players={players}
              isGameOver={isGameOver}
              playerTurn={playerTurn}
            />
          ))}
        </FlexBetween>
      </motion.div>
      <Settings />
    </Box>
  )
}

export default Menu
