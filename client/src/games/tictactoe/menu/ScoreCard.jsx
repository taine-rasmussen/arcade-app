import { useTheme, Typography, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';
import { useState } from 'react'

const ScoreCard = (result) => {

  const [openModal, setOpenModal] = useState(false)

  const theme = useTheme()
  const bg = theme.palette.background.main


  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
          width: '90%',
          background: bg,
          display: 'flex',
          minHeight: '20%',
          alignItems: 'center',
          borderRadius: '10px',
          justifyContent: 'center',
          border: '3px solid #000',
        }}
        className='hover'
        onClick={() => { setOpenModal(true) }}
      >
        <Typography
          variant='h3'
        >
          {result.result.winner ? 'X' : 'O'}
        </Typography>
      </motion.div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={modalStyle}
        >
          'working???'
          {console.log(result)}
        </Box>
      </Modal>
    </>
  )
}

export default ScoreCard