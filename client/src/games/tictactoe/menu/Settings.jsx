import { GameContext } from '../index';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
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
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <BtnGroup />
      <Box
        sx={{
          gap: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          overflowY: 'auto',
          overflowX: 'hidden',
          flexDirection: 'row',
        }}
      >
        {session.map((result, i) => (
          <ScoreCard result={result} key={i} />
        )
        )}
      </Box>
    </motion.div >
  )
}

export default Settings
