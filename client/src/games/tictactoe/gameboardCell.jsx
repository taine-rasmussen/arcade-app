import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { GameContext } from './index';

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
  const bgAlt = theme.palette.primary.light
  const highlight = theme.palette.primary.highlight
  const isNonMobileScreens = useMediaQuery('(min-width:1150px)');

  const handleMove = (id) => {
    dispatch({ type: 'play', payload: id })
    // dispatch('checkWin')
  }

  const isWinningCell = preview
    ? winCells[0] === id || winCells[1] === id || winCells[2] === id
    : false

  useEffect(
    () => {
      if (!playerTurn && isSinglePlayerMode) {
        dispatch({ type: 'play', payload: null })
      }
    }, [playerTurn]
  )

  return (
    <Box
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.75rem',
        justifyContent: 'center',
        border: '3px solid #000',
        backgroundColor: isWinningCell ? highlight : bgAlt,
        width: !isNonMobileScreens ? '150px' : 'auto',
        height: !isNonMobileScreens ? '150px' : 'auto',

      }}
      onClick={
        value != '' || isGameOver || preview
          ? () => { console.log('NO!') }
          : () => { isSinglePlayerMode && !playerTurn ? handleMove() : handleMove(id) }
      }
    >
      <Typography
        sx={{
          fontSize: '10rem'
        }}
      >
        {value}
      </Typography>
    </Box >
  )
}

export default GameboardCell
