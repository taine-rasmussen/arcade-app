import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Profile = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt
  const user = useSelector(state => state.user)
  const {
    username
  } = user

  const spanHighlight = {
    backgroundColor: alt,
    borderRadius: '0.75rem',
    padding: '5px 0px 5px 10px'
  }

  return (
    <Box
      sx={{
        gap: '1rem',
        width: '100%',
        height: '100%',
        display: 'flex',
        minWidth: 'max-content',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant='h2'
      >
        <span style={spanHighlight}>Mini</span>clip
      </Typography>
      <Typography
        variant='h2'
      >
        {username}
      </Typography>
    </Box>
  )
}

export default Profile
