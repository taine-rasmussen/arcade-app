import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, useTheme, Typography } from '@mui/material';
import profile from '../assets/profile.jpeg';
import { useSelector } from 'react-redux';


const ProfileWidget = ({ preview }) => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt;
  const highlight = theme.palette.primary.highlight;
  const username = useSelector(state => state.user.username);


  const imgStyles = {
    height: '135px',
    width: '135px',
  }

  const previewImgStyles = {
    height: '55px',
    width: '55px',
  }

  return (
    <Box
      sx={{
        gap: '1rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src={profile}
          alt='profile image'
          style={preview ? previewImgStyles : imgStyles}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h2'
        >
          {username}
        </Typography>
        <Typography
          variant='h5'
          color={alt}
        >
          Silver
        </Typography>
      </Box>
    </Box >
  )
}

export default ProfileWidget
