import { useTheme, Typography, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';
import { useState } from 'react'
import ScoreCardModal from './ScoreCardModal'

const ScoreCard = (result) => {
  const [openModal, setOpenModal] = useState(false)
  const theme = useTheme()
  const light = theme.palette.primary.light

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
          {result.result.winner ? 'X' : 'O'}
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