import { Box, useTheme, Typography, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext } from 'react';
import { GameContext } from '../index';

const Test = () => {
  const theme = useTheme();
  const { dispatch, state: { isSinglePlayerMode } } = useContext(GameContext);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <Typography
        variant='h2'
      >
        {
          isSinglePlayerMode
            ? 'Single player'
            : 'Two player'
        }
      </Typography>

      <Button
        variant='outlined'
        onClick={() => { dispatch({ type: 'toggleGameMode' }) }}
      >
        Toggle
      </Button>
    </Box>
  )
}

export default Test
