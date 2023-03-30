import { Box, useTheme } from '@mui/material';

import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const Games = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} height={100} width={100}>
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
