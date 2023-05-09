import Modal from '@mui/material/Modal';
import { Box, useTheme } from '@mui/material';

const SettingsModal = ({ openSettingsModal, setOpenSettingsModal }) => {

  const theme = useTheme();
  const modalBg = theme.palette.background.alt


  return (
    <Modal
      open={openSettingsModal}
      onClose={() => setOpenSettingsModal(false)}
    >
      <Box
        sx={{
          top: '50%',
          left: '50%',
          width: '50%',
          height: '90%',
          display: 'grid',
          padding: '2rem',
          gridGap: '15px',
          position: 'absolute',
          borderRadius: '1.25rem',
          backgroundColor: modalBg,
          transform: 'translate(-50%, -50%)',
        }}
      >
        SETTINGS
      </Box>
    </Modal>
  )
}

export default SettingsModal
