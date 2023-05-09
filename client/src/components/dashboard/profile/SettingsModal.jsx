import { Box, useTheme, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Modal from '@mui/material/Modal';

const SettingsModal = ({ openSettingsModal, setOpenSettingsModal }) => {

  const theme = useTheme();
  const dark = theme.palette.primary.dark
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
          padding: '2rem',
          gridGap: '15px',
          position: 'absolute',
          borderRadius: '1.25rem',
          backgroundColor: modalBg,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <Typography>
            Settings
          </Typography>
          <SettingsIcon sx={{ fontSize: '32px', color: dark }} />
        </Box>
      </Box>
    </Modal>
  )
}

export default SettingsModal
