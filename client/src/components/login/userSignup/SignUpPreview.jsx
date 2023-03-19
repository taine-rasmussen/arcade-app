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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      <Typography
        fontWeight='bold'
        fontSize='3.5rem'
      >
        Create account
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: primaryLight,
          borderRadius: '30px',
          fontSize: '0.9rem',
          height: '5ch',
          width: '33ch',
          color: '#fff',
          m: 1,
          '&:hover': {
            color: primaryLight
          }
        }}
        onClick={() => setIsOnSignUpForm(!isOnSignUpForm)}
      >
        Sign up
      </Button >
    </Box >
  )
}

export default SignUpPreview
