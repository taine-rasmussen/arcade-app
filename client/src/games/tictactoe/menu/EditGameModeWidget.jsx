import { useState, useContext } from 'react';
import { GameContext } from '../index';
import { Box, useTheme, Typography } from '@mui/material';

const Display = () => {
  const { dispatch, state: { isSinglePlayerMode } } = useContext(GameContext);

  return (
    <Box>
      <Typography
        variant='h2'
      >
        {
          isSinglePlayerMode
            ? 'Single player'
            : 'Two player'
        }
      </Typography>
    </Box>
  )
}

const EditGameModeWidget = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit
        ? <Input />
        : <Display />}
    </>
  )
}

export default EditGameModeWidget
