import VisibilityOff from '@mui/icons-material/VisibilityOff';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import InputAdornment from '@mui/material/InputAdornment';
import { Box, useTheme, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useState } from 'react';


const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const theme = useTheme();
  const bgLight = theme.palette.neutral.light

  return (
    <Box
      width='60%'
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
            id="outlined-adornment-weight"
            sx={{ background: bgLight, fontSize: '1rem' }}
            label="Password"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={showPassword ? 'text' : 'password'}
            id="outlined-adornment-password"
            sx={{ background: bgLight, fontSize: '1rem' }}
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
      </Box >
    </Box >
  )
}

export default LoginForm
