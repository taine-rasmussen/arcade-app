import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'


const ProfileCard = () => {

  const theme = useTheme()

  return (
    <WidgetWrapper theme={theme} height={30} width={43}>
      profilecard
    </WidgetWrapper>
  )
}

export default ProfileCard
