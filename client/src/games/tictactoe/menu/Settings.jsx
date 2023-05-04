import { Box, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import { GameContext } from '../index';
import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import ScoreCard from './ScoreCard';
import { useContext } from 'react';
import BtnGroup from './BtnGroup';

const Settings = () => {
  const { state: { session } } = useContext(GameContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: ['300px', '0px'], opacity: 1 }}
      transition={{ type: 'tween', duration: 0.6, delay: 0.75 }}
      style={{
        height: '100%',
        width: '100%',
        zIndex: '2',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <BtnGroup />

      <Box sx={{
        width: '55%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        <Box
          sx={{
            gap: '1rem',
            height: '90%',
            display: 'flex',
            overflowY: 'auto',
            overflowX: 'hidden',
            alignItems: 'center',
            border: '4px solid #fff'
          }}
        >
          {session.map((result, i) => (
            <ScoreCard result={result} key={i} />
          )
          )}
        </Box>
      </Box>
    </motion.div >
  )
}

export default Settings
