import { Box, useTheme, useMediaQuery } from '@mui/material'
import { useState } from 'react';


import LoginForm from './userLogin/LoginForm'
import SignUp from './userSignup/SignUp'
import WidgetWrapper from '../../wrapper/WidgetWrapper'


const Login = () => {

  const [isOnSignUpForm, setIsOnSignUpForm] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

  const theme = useTheme();

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
            <WidgetWrapper theme={theme}>
              <Box
                height='90vh'
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
            </WidgetWrapper>
          )}
    </>
  )
}

export default Login
