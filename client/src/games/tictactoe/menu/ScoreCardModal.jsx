import { useTheme, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import GameboardCell from '../gameboardCell'

const ScoreCardModal = ({ openModal, setOpenModal, result }) => {

  const theme = useTheme();
  const main = theme.palette.background.main

  console.log(result.result)

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{
          border: '2px solid #000',
          position: 'absolute',
          height: '70%',
          width: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'grid',
          gridGap: '15px',
          backgroundColor: 'transparent',
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
