import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { useContext } from 'react'
import { GameContext } from './index'

const GameboardCell = (props) => {
  const {
    state: {
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
    if (id === undefined) {
      dispatch({ type: 'play', })
    } else {
      dispatch({ type: 'play', payload: id })
    }
    // dispatch('checkWin')
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
        backgroundColor: isWinningCell ? highlight : bgAlt,
        width: !isNonMobileScreens ? '150px' : 'auto',
        height: !isNonMobileScreens ? '150px' : 'auto',

      }}
      onClick={
        value != '' || isGameOver || preview
          ? () => { console.log('NO!') }
          : () => { isSinglePlayerMode ? console.log('single') : handleMove(id) }
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
