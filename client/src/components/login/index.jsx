import Box from '@mui/material/Box';
import { useState } from 'react';


import LoginForm from './LoginForm'
import SignUp from './SignUp'

const Login = () => {

  const [isOnRegisterForm, setIsOnRegisterForm] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'primary.dark',
      }}
    >
      <LoginForm
        setIsOnRegisterForm={setIsOnRegisterForm}
        isOnRegisterForm={isOnRegisterForm}
      />
      <SignUp
        setIsOnRegisterForm={setIsOnRegisterForm}
        isOnRegisterForm={isOnRegisterForm}
      />
    </Box>
  )
}

export default Login
