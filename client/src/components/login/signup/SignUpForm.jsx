import { Box, useTheme } from '@mui/material';

const SignUpForm = (props) => {
  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light

  return (
    <Box
      width='100%'
      height='100%'
      textAlign='center'
      backgroundColor={primaryLight}
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
