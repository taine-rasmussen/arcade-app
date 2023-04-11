import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'


const ProfileCard = (props) => {

  const {
    player,
    i
  } = props

  const theme = useTheme()

  console.log(player)

  return (
    <WidgetWrapper theme={theme} height={40} width={45}>
      profilecard
    </WidgetWrapper >
  )
}

export default ProfileCard
