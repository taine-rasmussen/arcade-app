import { Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import WidgetWrapper from '../../../wrapper/WidgetWrapper'

const Games = () => {

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <WidgetWrapper
      theme={theme}
      height={100}
      border={true}
      width={35}
      sx={{ transition: 'ease-out all 0.35s' }}
    >
      <Box
        onClick={() => { navigate('/tictactoe') }}
      >
        tictactoe
      </Box>
    </WidgetWrapper >
  )
}

export default Games
