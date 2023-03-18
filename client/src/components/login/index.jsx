import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'

import { useState } from 'react';


import LoginForm from './userLogin/LoginForm'
import SignUp from './userSignup/SignUp'

const Login = () => {

  const [isOnSignUpForm, setIsOnSignUpForm] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

  return (
    <>
      {
        isOnSignUpForm ?
          (
            <SignUp
              setIsOnSignUpForm={setIsOnSignUpForm}
              isOnSignUpForm={isOnSignUpForm}
            />
          ) : (
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
          )}
    </>
  )
}

export default Login
