import { Box, useTheme } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const Stats = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} height={80} width={35}>
      <Box>
        STATS
      </Box>
    </WidgetWrapper>
  )
}

export default Stats
