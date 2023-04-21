import { useTheme, Typography, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion';
import { useState } from 'react'

const ScoreCardModal = ({ openModal, setOpenModal, result }) => {


  console.log(result)

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

    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={modalStyle}
      >

      </Box>
    </Modal>
  )
}

export default ScoreCardModal
