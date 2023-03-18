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

    <>
      {isOnSignUpForm ?
        (
          <Box
            width='100%'
            height='100%'
            textAlign='center'
            backgroundColor={primaryLight}
          >
            This is the full screen form
            <button
              onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
            >
              change form
          </button>
          </Box>
        ) : (
          <Box
            width='33%'
            border='1px solid #000'
            backgroundColor={primaryLight}
          >
            Sign up
            <button
              onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
            >
              change form
              </button>
          </Box>
        )}
    </>
  )
}

export default SignUp
