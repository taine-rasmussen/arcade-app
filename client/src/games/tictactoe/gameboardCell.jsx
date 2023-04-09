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
    isGameOver,
    setIsGameOver,
    setPlayerTurn,
    isSinglePlayerMode,
  } = props;

  const theme = useTheme();
  const alt = theme.palette.background.alt

  const handleTwoPlayerMove = (value, id) => {
    if (value != '' || isGameOver) return;
    if (playerTurn) {
      setGame([...game], game[id].value = 'X')
    } else {
      setGame([...game], game[id].value = 'O')
    }
    checkForWin()
    setPlayerTurn(!playerTurn)
  };

  const checkForWin = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // Loop through each winning combination
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      const cellA = game.find(cell => cell.id === a);
      const cellB = game.find(cell => cell.id === b);
      const cellC = game.find(cell => cell.id === c);
      // If all three cells have the same value, return the winner
      if (cellA.value && cellA.value === cellB.value && cellB.value === cellC.value) {
        setIsGameOver(!isGameOver)
      }
    }

    // If no one has won yet, return null
    return null;
  }


  return (
    <Box
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alt,
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
