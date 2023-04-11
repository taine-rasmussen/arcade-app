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
  const main = theme.palette.background.main
  const loggedInUsername = useSelector((state) => state.user.username)
  const isLoggedInUser = loggedInUsername === name;

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
        <Typography
          variant='h2'
        >
          {name}
        </Typography>
        <Typography></Typography>


      </Box>
    </WidgetWrapper >
  )
}

export default ProfileCard
