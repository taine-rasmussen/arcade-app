import { useState } from 'react';

import LoginForm from './LoginForm'
import SignUp from './SignUp'

const Login = () => {

  const [isOnRegisterForm, setIsOnRegisterForm] = useState(false);

  return (
    <>
      <LoginForm
        setIsOnRegisterForm={setIsOnRegisterForm}
        isOnRegisterForm={isOnRegisterForm}
      />
      <SignUp
        setIsOnRegisterForm={setIsOnRegisterForm}
        isOnRegisterForm={isOnRegisterForm}
      />
    </>
  )
}

export default Login
