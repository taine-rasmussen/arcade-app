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


  const state = {

  };

  const funcs = {

  };

  return { state, funcs }
}

export default useTicTacToeApi