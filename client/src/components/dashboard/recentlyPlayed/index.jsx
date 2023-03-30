import { Box, useTheme } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const RecentlyPlayed = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} width={75}>
      <Box>
        Recently played
      </Box>
    </WidgetWrapper>
  )
}

export default RecentlyPlayed
