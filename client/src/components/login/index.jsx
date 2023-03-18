import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'

import { useState } from 'react';


import LoginForm from './LoginForm'
import SignUp from './SignUp'

const Login = () => {

  const [isOnSignUpForm, setIsOnSignUpForm] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.neutral.alt;

  return (
    <Box
      width='100%'
      height='100%'
      textAlign='center'
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <LoginForm
        setIsOnSignUpForm={setIsOnSignUpForm}
        isOnSignUpForm={isOnSignUpForm}
      />
      <SignUp
        setIsOnSignUpForm={setIsOnSignUpForm}
        isOnSignUpForm={isOnSignUpForm}
      />
    </Box >
  )
}

export default Login
