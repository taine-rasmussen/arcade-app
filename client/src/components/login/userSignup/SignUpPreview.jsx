import { Box, useTheme } from '@mui/material'

const SignUpPreview = (props) => {

  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light
  const primaryMain = theme.palette.primary.main



  return (
    <Box
      width='40%'
      borderLeft={`1px solid ${primaryMain}`}
      backgroundColor={primaryLight}
    >
      Sign up
      <button
        onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
      >
        change form
      </button >
    </Box >
  )
}

export default SignUpPreview
