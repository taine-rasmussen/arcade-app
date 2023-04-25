import { Box, useTheme } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const Stats = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper
      width={33}
      height={100}
      theme={theme}
      border={true}
      sx={{ transition: 'ease-out all 0.35s' }}>
      <Box>
        STATS
      </Box>
    </WidgetWrapper>
  )
}

export default Stats
