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
  const alt = theme.palette.background.alt
  const main = theme.palette.primary.main
  const isNonMobileScreens = useMediaQuery('(min-width:1150px)');

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
        width: !isNonMobileScreens ? '100px' : 'auto',
        height: !isNonMobileScreens ? '100px' : 'auto',

      }}
      onClick={
        value != '' || isGameOver || preview
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
