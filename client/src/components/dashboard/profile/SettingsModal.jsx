import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const SettingsModal = () => {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenSettings(false)}
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
