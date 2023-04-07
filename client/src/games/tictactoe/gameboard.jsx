import { useState } from 'react';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const INITGAME = [
  {
    id: 0,
    value: '',
  },
  {
    id: 1,
    value: '',
  },
  {
    id: 2,
    value: '',
  },
  {
    id: 3,
    value: '',
  },
  {
    id: 4,
    value: 'test',
  },
  {
    id: 5,
    value: '',
  },
  {
    id: 6,
    value: '',
  },
  {
    id: 7,
    value: '',
  },
  {
    id: 8,
    value: '',
  },
]

const Gameboard = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const [game, setGame] = useState(INITGAME)
  const [playerMoves, setPlayerMoves] = useState({ count: 0, turn: true })

  const handleCellClick = (cell) => {
    if (!playerTurn) return;

    setGame([...game], game[cell.id].value = 'X')
    setPlayerTurn
    console.log(cell)
  }

  return (
    <WidgetWrapper
      width={45}
      height={75}
      theme={theme}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        {game.map((cell, i) => (
          <Box
            key={cell.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid white',
            }}
            onClick={() => { handleCellClick(cell) }}
          >
            {cell.value}
          </Box>
        ))}

      </Box>
    </WidgetWrapper>
  )
}

export default Gameboard
