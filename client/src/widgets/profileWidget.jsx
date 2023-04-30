import { Box, useTheme, Typography } from '@mui/material';
import profile from '../assets/profile.jpeg';
import { useSelector } from 'react-redux';


const ProfileWidget = ({ preview }) => {

  const username = useSelector(state => state.user.username)

  const imgStyles = {
    height: '115px',
    width: '115px',
  }

  const previewImgStyles = {
    height: '55px',
    width: '55px',
  }

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
        style={preview ? previewImgStyles : imgStyles}
      />
      <Typography>
        {username}
      </Typography>
    </Box>
  )
}

export default ProfileWidget
