import FlexBetween from '../../../wrapper/FlexBetween'
import { Box, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import { GameContext } from '../index';
import { useContext } from 'react';

import ProfileCard from './ProfileCard';
import Settings from './Settings';

const Menu = () => {

  return (
    <Box
      sx={{
        gap: '2rem',
        height: '75%',
        display: 'flex',
        minWidth: 'maxContext',
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
          <ProfileCard
            activeTurn={true}
          />
          <ProfileCard
            activeTurn={false}
          />
        </FlexBetween>
      </motion.div>
      <Settings />
    </Box>
  )
}

export default Menu
