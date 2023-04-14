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

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      const cellA = game.find(cell => cell.id === a);
      const cellB = game.find(cell => cell.id === b);
      const cellC = game.find(cell => cell.id === c);

      if (cellA.value && cellA.value === cellB.value && cellB.value === cellC.value) {
        setIsGameOver(true)
        setCurrentWinner(players[playerTurn])
      }
    }
    return null;
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
