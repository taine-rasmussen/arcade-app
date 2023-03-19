import { Box, useTheme, useMediaQuery } from '@mui/material'
import { useState } from 'react';


import LoginForm from './userLogin/LoginForm'
import SignUp from './userSignup/SignUp'
import WidgetWrapper from '../../wrapper/WidgetWrapper'


const Login = () => {

  const [isOnSignUpForm, setIsOnSignUpForm] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

  const theme = useTheme();
  const alt = theme.palette.background.alt

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
              height='100vh'
              textAlign='center'
              backgroundColor={alt}
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
