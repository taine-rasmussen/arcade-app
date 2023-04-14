import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';

const GameboardCell = (props) => {

  const {
    cell: {
      value,
      id
    },
    game,
    setGame,
    players,
    playerTurn,
    isGameOver,
    setIsGameOver,
    setPlayerTurn,
    setCurrentWinner,
    isSinglePlayerMode,
  } = props;

  const theme = useTheme();
  const alt = theme.palette.background.alt

  const handleTwoPlayerMove = (value, id) => {
    if (value != '' || isGameOver) return;
    if (playerTurn === 0) {
      setGame([...game], game[id].value = 'X')
    } else {
      setGame([...game], game[id].value = 'O')
    }
    checkForWin()
    playerTurn === 0 ? setPlayerTurn(1) : setPlayerTurn(0)
  };

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
