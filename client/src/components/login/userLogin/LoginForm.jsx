import { Box, useTheme, Typography } from '@mui/material'
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
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




      </WidgetWrapper>
    </Box>
  )
}

export default LoginForm
