import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import useTicTacToeApi from './useTicTacToeApi';
import { useContext, useEffect } from 'react'
import { GameContext } from './index'

const GameboardCell = (props) => {

  const {
    state: {
      game,
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

  useEffect(
    () => {
      dispatch('checkWin')
    }, [game]
  )



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
          : () => { isSinglePlayerMode ? console.log('single') : dispatch(id) }
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
