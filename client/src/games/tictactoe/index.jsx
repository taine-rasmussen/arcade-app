import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Gameboard from './gameboard'

const TicTacToe = () => {

  const navigate = useNavigate();
  const theme = useTheme();
  const main = theme.palette.background.main

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: '3rem',
        flexWrap: 'wrap',
        background: main,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Gameboard />
    </Box>
  )
}

export default TicTacToe
