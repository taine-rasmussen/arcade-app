import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import useTicTacToeApi from './useTicTacToeApi';
import { useContext, useEffect } from 'react'
import { GameContext } from './index'

const GameboardCell = (props) => {

  const {
    state: {
      playerTurn,
      isGameOver,
      isSinglePlayerMode
    },
    dispatch
  } = useContext(GameContext)

  const {
    cell: {
      value,
      id
    }
  } = props

  const theme = useTheme();
  const alt = theme.palette.background.alt

  const handleTwoPLayerMove = (id) => {
    dispatch(id)
    dispatch('checkWin')

  }



  return (
    <Box
      key={id}
      sx={{
        display: 'flex',
        backgroundColor: alt,
        alignItems: 'center',
        borderRadius: '0.75rem',
        justifyContent: 'center',
      }}
      onClick={
        value != '' || isGameOver
          ? () => { console.log('NO!') }
          : () => { isSinglePlayerMode ? console.log('single') : handleTwoPLayerMove(id) }
      }
    >
      <Typography
        variant="h1"
      >
        {value}
      </Typography>
    </Box >
  )
}

export default GameboardCell
