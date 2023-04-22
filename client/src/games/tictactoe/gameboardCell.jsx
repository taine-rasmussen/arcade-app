import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { useContext } from 'react'
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
    },
    preview,
    winCells
  } = props

  const theme = useTheme();
  const alt = theme.palette.background.alt
  const main = theme.palette.primary.main

  const handleTwoPLayerMove = (id) => {
    dispatch(id)
    dispatch('checkWin')
  }

  const isWinningCell = preview
    ? winCells[0] === id || winCells[1] === id || winCells[2] === id
    : false

  return (
    <Box
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.75rem',
        justifyContent: 'center',
        border: '3px solid #000',
        backgroundColor: isWinningCell ? main : alt,
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
