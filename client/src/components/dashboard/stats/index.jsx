import { Box, useTheme } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const Stats = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper
      width={35}
      height={80}
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
