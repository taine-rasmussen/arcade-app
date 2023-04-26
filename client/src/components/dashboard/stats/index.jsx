import { Box, useTheme } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const Stats = () => {

  const theme = useTheme();
  const dark = theme.palette.primary.dark

  return (
    <WidgetWrapper
      bg={dark}
      width={43}
      height={100}
      sx={{ transition: 'ease-out all 0.35s' }}>
      <Box>
        STATS
      </Box>
    </WidgetWrapper>
  )
}

export default Stats
