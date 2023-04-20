import { useState, useContext } from 'react';
import { GameContext } from '../index';
import { Box, useTheme, Typography } from '@mui/material';

const EditNameWidget = () => {
  const [isEdit, setIsEdit] = useState(false);
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

export default EditNameWidget
