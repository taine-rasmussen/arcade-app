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
          top: '50%',
          left: '50%',
          width: '50%',
          height: '70%',
          display: 'grid',
          gridGap: '15px',
          position: 'absolute',
          border: '2px solid #000',
          backgroundColor: 'transparent',
          gridTemplateRows: 'repeat(3, 1fr)',
          transform: 'translate(-50%, -50%)',
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
