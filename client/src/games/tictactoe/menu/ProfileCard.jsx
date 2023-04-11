import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';


const ProfileCard = (props) => {

  const {
    players,
    player: {
      name
    }
  } = props

  const theme = useTheme()
  const main = theme.palette.background.main
  const borderColor = theme.palette.primary.main
  const loggedInUsername = useSelector((state) => state.user.username)
  const isLoggedInUser = loggedInUsername === name;

  const iconStlye = {
    fontSize: '2rem'
  }

  return (
    <WidgetWrapper
      theme={theme}
      height={40}
      width={45}
      sx={
        isLoggedInUser ? { border: `4px solid ${borderColor}` } : null
      }
    >
      <Box
        sx={{
          gap: '1rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'spaceBetween',
        }}
      >
        <Box
          sx={{
            width: '100px',
            height: '100px',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            backgroundColor: main,
            justifyContent: 'center',
          }}
        >
          Pic
        </Box>
        <Typography variant='h2'>
          {name}
        </Typography>
        <Typography variant='h3'>
          {isLoggedInUser
            ? <TripOriginIcon sx={iconStlye} />
            : <CloseIcon sx={iconStlye} />}
        </Typography>


      </Box>
    </WidgetWrapper >
  )
}

export default ProfileCard
