import { useState } from 'react';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const Gameboard = (props) => {

  const {
    game,
    setGame,
    currentGame,
    setCurrentGame
  } = props

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const handleCellClick = (cell) => {
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
