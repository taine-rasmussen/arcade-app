import { Box, useTheme, Typography } from '@mui/material'
import Button from '@mui/material/Button';


const SignUpPreview = (props) => {

  const {
    setIsOnSignUpForm,
    isOnSignUpForm
  } = props;

  const theme = useTheme();
  const primaryLight = theme.palette.primary.light
  const primaryMain = theme.palette.primary.main
  const bgLight = theme.palette.neutral.light



  return (
    <Box
      width='40%'
      borderLeft={`7px solid ${bgLight}`}
      backgroundColor={primaryLight}
    >
      <Typography
        fontWeight='bold'
        fontSize='4rem'
        color='alt'
      >
        New here?
      </Typography>

      <Typography
        fontWeight='bold'
        fontSize='1.25rem'
        color='neutral'
      >
        Sign up and get right into the games
      </Typography>
      <button
        onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
      >
        Sign up
      </button >
    </Box >
  )
}

export default SignUpPreview
