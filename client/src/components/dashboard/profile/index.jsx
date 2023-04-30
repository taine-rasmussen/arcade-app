import { Box, useTheme, Typography } from '@mui/material';
import ProfileWidget from '../../../widgets/profileWidget'

const Profile = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt

  const spanHighlight = {
    backgroundColor: alt,
    borderRadius: '0.75rem',
    padding: '5px 0px 5px 10px'
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: 'max-content',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        variant='h1'
      >
        <span style={spanHighlight}>Mini</span>clip
      </Typography>
      <ProfileWidget preview={false} />
    </Box>
  )
}

export default Profile
