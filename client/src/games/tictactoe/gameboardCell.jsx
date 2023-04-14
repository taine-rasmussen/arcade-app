import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import useTicTacToeApi from './useTicTacToeApi';

const GameboardCell = (props) => {

  const {
    cell: {
      value,
      id
    }
  } = props

  const {
    state,
    funcs
  } = useTicTacToeApi();
  const { isSinglePlayerMode } = state
  const { handleTwoPlayerMove } = funcs

  const theme = useTheme();
  const alt = theme.palette.background.alt

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
