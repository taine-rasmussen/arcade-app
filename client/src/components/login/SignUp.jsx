import { Box, useTheme } from '@mui/material'
import { useState } from 'react';

const SignUp = (props) => {

  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.neutral.alt;


  return (
    <Box
      width='33%'
      border='1px solid #000'
      backgroundColor={primaryLight}
    >
      Sign up
    </Box>
  )
}

export default SignUp
