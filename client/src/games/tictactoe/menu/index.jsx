import FlexBetween from '../../../wrapper/FlexBetween'
import { Box, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import { GameContext } from '../index';
import { useContext } from 'react';

import ProfileCard from './ProfileCard';
import Settings from './Settings';

const Menu = ({ seconds }) => {

  return (
    <Box
      sx={{
        gap: '2rem',
        width: '25%',
        height: '75%',
        display: 'flex',
        minWidth: 'maxContext',
        flexDirection: 'column',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        style={{ zIndex: '1', height: '40%' }}
        animate={{ x: ['300px', '0px'], opacity: 1 }}
        transition={{ type: 'tween', duration: 0.6, delay: 0.75 }}

      >
        <FlexBetween sx={{ gap: '15px' }}>
          <ProfileCard
            activeTurn={true}
          />
          <ProfileCard
            activeTurn={false}
          />
        </FlexBetween>
      </motion.div>
      <Settings seconds={seconds} />
    </Box >
  )
}

export default Menu
