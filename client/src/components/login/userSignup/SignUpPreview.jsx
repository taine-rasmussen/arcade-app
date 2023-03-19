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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
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
        fontSize='1.15rem'
        color='neutral'
      >
        Sign up and get right into the games
      </Typography>
      <Button
        variant="contained"
        fontSize='1.25rem'
        sx={{
          backgroundColor: '#fff',
          borderRadius: '30px',
          fontSize: '0.9rem',
          height: '5ch',
          width: '33ch',
          m: 1,
        }}
        onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
      >
        Sign up
      </Button >
    </Box >
  )
}

export default SignUpPreview
