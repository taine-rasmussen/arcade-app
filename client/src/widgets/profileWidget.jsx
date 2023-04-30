import { Box, useTheme, Typography } from '@mui/material';
import profile from '../assets/profile.jpeg';
import { useSelector } from 'react-redux';


const ProfileWidget = () => {

  const username = useSelector(state => state.user.username)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <img
        src={profile}
        alt='profile image'
      />
      <Typography>
        {username}
      </Typography>
    </Box>
  )
}

export default ProfileWidget
