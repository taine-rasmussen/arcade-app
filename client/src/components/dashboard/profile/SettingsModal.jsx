import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const SettingsModal = ({ openSettingsModal, setOpenSettingsModal }) => {
  return (
    <Modal
      open={openSettingsModal}
      onClose={() => setOpenSettingsModal(false)}
    >
      <Box
        sx={{

        }}
      >
        SETTINGS
      </Box>
    </Modal>
  )
}

export default SettingsModal
