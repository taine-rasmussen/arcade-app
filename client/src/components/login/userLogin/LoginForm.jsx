import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, useTheme, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { setLogin } from '../../../state';
import axios from 'axios';


const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async () => {

    axios.post('http://localhost:9000/auth/login', {
      username: username,
      password: password
    }).then((response) => {
      const { token, user } = response.data
      dispatch(setLogin({ user, token }));

      setPassword('')
      setUsername('')
      if (user && token) {
        navigate('/dashboard')
      }
      // Handle incorrect login
    })
      .catch((error) => {
        console.log(error);
      });
  };

  const theme = useTheme();
  const bgLight = theme.palette.neutral.light
  const primaryMain = theme.palette.primary.main

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem'
      }}
    >
      <Typography
        fontWeight='bold'
        fontSize='4rem'
        color='primary'
      >
        Login to your account
      </Typography>

      <Typography
        fontWeight='bold'
        fontSize='1.25rem'
        color='neutral'
      >
        Sign in and start playing
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
          <OutlinedInput
            aria-describedby="outlined-weight-helper-text"
            onChange={(e) => setUsername(e.target.value)}
            id="outlined-adornment-weight"
            sx={{ background: bgLight, fontSize: '1.1rem' }}
            value={username}
            inputProps={{
              'aria-label': 'weight',
            }}
            label="Username"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            id="outlined-adornment-password"
            sx={{ background: bgLight, fontSize: '1.1rem' }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl >
        <Button
          variant="contained"
          fontSize='1.25rem'
          onClick={handleSubmit}
          sx={{
            background: primaryMain,
            borderRadius: '30px',
            fontSize: '0.9rem',
            height: '5ch',
            width: '33ch',
            m: 1,
          }}
        >
          Sign In
        </Button>
      </Box >
    </Box >
  )
}

export default LoginForm
