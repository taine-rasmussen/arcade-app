import { Box, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { GameContext } from '../index';

const EditGameMode = () => {
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

export default EditGameMode
