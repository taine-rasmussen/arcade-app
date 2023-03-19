import { Box, useTheme, useMediaQuery } from '@mui/material'
import Divider from '@mui/material/Divider';
import { useState } from 'react';


import LoginForm from './userLogin/LoginForm'
import SignUp from './userSignup/SignUp'


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
                flexDirection: 'row',
                gap: '4rem',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <LoginForm />
              <Divider orientation="vertical" variant="middle" sx={{ height: '75ch', }} />
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
