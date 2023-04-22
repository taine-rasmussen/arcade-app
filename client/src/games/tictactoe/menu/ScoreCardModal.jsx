import GameboardCell from '../gameboardCell'
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const ScoreCardModal = ({ openModal, setOpenModal, result }) => {

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        p='15px'
        sx={{
          top: '50%',
          left: '50%',
          width: '50%',
          height: '70%',
          display: 'grid',
          gridGap: '15px',
          position: 'absolute',
          backgroundColor: '#000',
          border: '2px solid #000',
          transform: 'translate(-50%, -50%)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {result.result.gameState.map((cell, i) => (
          <GameboardCell
            key={i}
            cell={cell}
          />
        ))}
      </Box>
    </Modal>
  )
}

export default ScoreCardModal
