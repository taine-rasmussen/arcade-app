import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Gameboard from './gameboard'
import Menu from './menu';

const TicTacToe = () => {

  const navigate = useNavigate();
  const theme = useTheme();
  const main = theme.palette.background.main

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <>
      <Box onClick={() => { navigate('/dashboard') }}>
        Return
      </Box>
      <Box
        sx={{
          gap: '3rem',
          width: '100%',
          height: '100%',
          padding: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          background: main,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Menu />
        <Gameboard />
      </Box>
    </>
  )
}

export default TicTacToe
