import { useState, useContext } from 'react';
import { GameContext } from '../index';
import { Box, useTheme, Typography } from '@mui/material';

const EditNameWidget = () => {

  return (
    <Box>
      <Typography
        variant='h2'
      >
        Edit
      </Typography>
    </Box>
  )
}

export default EditNameWidget
