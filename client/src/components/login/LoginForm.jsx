import { Box, useTheme } from '@mui/material'
import { useState } from 'react';


const LoginForm = (props) => {

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.neutral.alt;

  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;


  return (
    <Box
      width='77%'
      border='1px solid #000'
      backgroundColor={primaryLight}
    >
      Login
    </Box>
  )
}

export default LoginForm
