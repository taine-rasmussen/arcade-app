import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, useTheme, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useState } from 'react'

const SignUpForm = (props) => {
  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme();
  const alt = theme.palette.background.alt
  const bgLight = theme.palette.neutral.light
  const primaryMain = theme.palette.primary.main
  const primaryLight = theme.palette.primary.light

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = { username, password }
    const response = await fetch(
      'http://localhost:9000/auth/register',
      {
        method: 'POST',
        body: formData
      },
    )
    const savedUser = await response.json();
    console.log(savedUser)
    // if (savedUser) {
    //   setPageType('login');
    // };
  };

  return (
    <Box
      width='100%'
      height='100%'
      textAlign='center'
      backgroundColor={alt}
      gap='1rem'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        fontWeight='bold'
        fontSize='4rem'
        color='primary'
      >
        Create new user
      </Typography>

      <form onSubmit={handleRegister}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Enter username</InputLabel>
            <OutlinedInput
              aria-describedby="outlined-weight-helper-text"
              onChange={(e) => setUsername(e.target.value)}
              id="outlined-adornment-weight"
              sx={{ background: bgLight, fontSize: '1.1rem' }}
              value={username}
              inputProps={{
                'aria-label': 'weight',
              }}
              label="Enter username"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Enter password</InputLabel>
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
              label="Enter password"
            />
          </FormControl >
        </Box >

        <Box
          gap='1rem'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            wrap: 'flex-wrap'
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: primaryLight,
              borderRadius: '30px',
              fontSize: '0.9rem',
              height: '5ch',
              width: '30ch',
              color: '#fff',
              m: 1,
              '&:hover': {
                color: primaryLight
              }
            }}
            onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
          >
            Already have an account?
        </Button>
          <Button
            variant="contained"
            fontSize='1.25rem'
            type='submit'
            sx={{
              background: primaryMain,
              borderRadius: '30px',
              fontSize: '0.9rem',
              height: '5ch',
              width: '20ch',
              m: 1,
            }}
          >
            Sign Up
        </Button>
        </Box>
      </form>
    </Box >
  )
}

export default SignUpForm
