import { useState } from 'react';
import { useSelector } from 'react-redux';


const useTicTacToeApi = () => {

  const loggedInUsername = useSelector((state) => state.user.username)

  const [game, setGame] = useState(INITGAME)
  const [playerTurn, setPlayerTurn] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [currentWinner, setCurrentWinner] = useState();
  const [isSinglePlayerMode, setIsSinglePlayerMode] = useState(false);
  const [players, setPlayers] = useState([{ name: loggedInUsername }, { name: 'playerTwo' }])

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

  const state = {
    game,
    players,
    playerTurn,
    isGameOver,
    currentWinner,
    isSinglePlayerMode,
  };

  const funcs = {
    checkForWin,
    handleTwoPlayerMove
  };

  return { state, funcs }
}

export default useTicTacToeApi