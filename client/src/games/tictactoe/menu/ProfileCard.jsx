import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import { useSelector } from 'react-redux';



const ProfileCard = (props) => {

  const {
    players,
    player: {
      name
    }
  } = props

  const theme = useTheme()
  const loggedInUsername = useSelector((state) => state.user.username)

  return (
    <WidgetWrapper theme={theme} height={40} width={45}>
      <Box
        sx={{
          gap: '1rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box>
          Pic
        </Box>
        <Typography>{player.name}</Typography>
        <Typography></Typography>


      </Box>
    </WidgetWrapper >
  )
}

export default ProfileCard
