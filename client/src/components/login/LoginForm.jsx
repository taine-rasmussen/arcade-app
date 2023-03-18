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
      width='60%'
      border='1px solid #000'
      backgroundColor={primaryLight}
    >
      Login
      <button
        onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
      >
        change form
      </button>
    </Box>
  )
}

export default LoginForm
