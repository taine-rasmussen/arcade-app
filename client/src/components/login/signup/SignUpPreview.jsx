import { Box, useTheme } from '@mui/material'

const SignUpPreview = (props) => {

  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light
  const alt = theme.palette.neutral.alt;


  return (
    <Box
      width='40%'
      border='1px solid #000'
      backgroundColor={primaryLight}
    >
      Sign up
      < button
        onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
      >
        change form
              </button >
    </Box >
  )
}

export default SignUpPreview
