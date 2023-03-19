import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, useTheme, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';

const SignUpForm = (props) => {
  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.background.alt


  return (
    <Box
      width='100%'
      height='100%'
      textAlign='center'
      backgroundColor={alt}
    >
      This is the full screen sign up form
      <button
        onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
      >
        change form
          </button>
    </Box>
  )
}

export default SignUpForm
