import { useContext, useState } from 'react';
import { GameContext } from '../index';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import ScoreCard from './ScoreCard';
import BtnGroup from './BtnGroup';
import EditNameWidget from './EditNameWidget'

const Settings = () => {
  const { state: { session } } = useContext(GameContext);
  const [isEdit, setIsEdit] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: ['300px', '0px'], opacity: 1 }}
      transition={{ type: 'tween', duration: 0.6, delay: 0.75 }}
      style={{
        gap: '2rem',
        zIndex: '2',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {isEdit && (
        <EditNameWidget setIsEdit={setIsEdit} isEdit={isEdit} />
      )}
      <BtnGroup setIsEdit={setIsEdit} isEdit={isEdit} />
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
