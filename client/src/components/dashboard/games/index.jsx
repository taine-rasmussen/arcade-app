import { Box, useTheme } from '@mui/material';

import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const Games = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} height={40} width={35}>
      <Box
        sx={{

        }}
      >
        hello
      </Box>
    </WidgetWrapper>
  )
}

export default Games
