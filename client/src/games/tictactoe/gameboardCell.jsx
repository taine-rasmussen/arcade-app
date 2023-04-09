import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';

const GameboardCell = (props) => {

  const {
    cell: {
      value,
      id
    },
    game,
    setGame,
    playerTurn,
    currentGame,
    setPlayerTurn,
  } = props;

  const theme = useTheme();

  const handleTwoPlayerMove = (value, id) => {
    if (value != '' || currentGame.gameOver) return;
    if (playerTurn) {
      setGame([...game], game[id].value = 'X')
    } else {
      setGame([...game], game[id].value = 'O')
    }
    setPlayerTurn(!playerTurn)
  };


  return (
    <Box
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid white',
      }}
      onClick={() => { currentGame.singlePlayerMode ? console.log('single') : handleTwoPlayerMove(value, id) }}
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
