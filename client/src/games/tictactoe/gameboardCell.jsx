import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { motion } from "framer-motion";

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
    if (playerTurn === 0) {
      setGame([...game], game[id].value = 'X')
      setPlayerTurn(1)

    } else {
      setGame([...game], game[id].value = 'O')
      setPlayerTurn(0)
    }
    checkForWin()
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
        setIsGameOver(!isGameOver)
      }
    }
    return null;
  }

  return (
    <motion.div
      key={id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alt,
        justifyContent: 'center'
      }}
      onClick={() => { isSinglePlayerMode ? console.log('single') : handleTwoPlayerMove(value, id) }}
    >
      <Typography
        variant="h1"
      >
        {value}
      </Typography>
    </motion.div >
  )
}

export default GameboardCell
