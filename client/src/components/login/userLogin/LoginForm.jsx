import VisibilityOff from '@mui/icons-material/VisibilityOff';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import InputAdornment from '@mui/material/InputAdornment';
import { Box, useTheme, Typography } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';


const LoginForm = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light

  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;


  return (
    <Box
      width='60%'
      border='1px solid #000'
      // backgroundColor={primaryLight}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <WidgetWrapper theme={theme}>
        <Typography
          fontWeight='bold'
          fontSize='4rem'
          color='primary'
          sx={{
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer'
            }
          }}
        >
          Login to your account
          </Typography>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            // type={showPassword ? 'text' : 'password'}
            type='password'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />}
                   */}
                   asdf
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl >




      </WidgetWrapper>
    </Box>
  )
}

export default LoginForm
