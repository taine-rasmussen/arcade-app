import { useTheme, Typography } from '@mui/material';
import ScoreCardModal from './ScoreCardModal';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ScoreCard = (result) => {
  const theme = useTheme()
  const light = theme.palette.primary.light
  const [openModal, setOpenModal] = useState(false)
  const {
    winner
  } = result.result

  return (
    <>
      <motion.div
        animate={{ x: ['150px', '0px'] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        style={{
          width: '125px',
          height: '75px',
          display: 'flex',
          background: light,
          alignItems: 'center',
          borderRadius: '0.75rem',
          justifyContent: 'center',
          border: '3px solid #000',
        }}
        onClick={() => { setOpenModal(true) }}
        className='primary_hover'
      >
        <Typography variant='h2'>
          {winner === 'Tie' ? 'Tie' : winner ? 'X' : 'O'}
        </Typography>
      </motion.div>
      <ScoreCardModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        result={result}
      />
    </>
  )
}

export default ScoreCard