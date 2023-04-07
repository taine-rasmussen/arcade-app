import { useState } from 'react';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const INITGAME = [
  {
    id: 0,
    value: '',
  },
  {
    id: 1,
    value: '',
  },
  {
    id: 2,
    value: '',
  },
  {
    id: 3,
    value: '',
  },
  {
    id: 4,
    value: '',
  },
  {
    id: 5,
    value: '',
  },
  {
    id: 6,
    value: '',
  },
  {
    id: 7,
    value: '',
  },
  {
    id: 8,
    value: '',
  },
]

const Gameboard = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const [game, setGame] = useState(INITGAME)

  return (
    <WidgetWrapper
      width={45}
      height={75}
      theme={theme}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%'
        }}
      >

      </Box>
    </WidgetWrapper>
  )
}

export default Gameboard
