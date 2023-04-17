import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import useTicTacToeApi from './useTicTacToeApi';
import { useContext } from 'react'
import { GameContext } from './index'

const GameboardCell = (props) => {

  const {
    state: { isSinglePlayerMode },
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

  const handleTwoPlayerMove = (value, id) => {
    console.log(value, id)
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
      onClick={() => { isSinglePlayerMode ? console.log('single') : handleTwoPlayerMove(value, id) }}
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
