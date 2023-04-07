import { Box, useTheme, useMediaQuery } from '@mui/material';


import Gameboard from './gameboard'

const TicTacToe = () => {
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
