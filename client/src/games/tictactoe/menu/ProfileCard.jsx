import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'


const ProfileCard = (props) => {

  const {
    players,
    player,
    i
  } = props

  const theme = useTheme()

  console.log(player)

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
