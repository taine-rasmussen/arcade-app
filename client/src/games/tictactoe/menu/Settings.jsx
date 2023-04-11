import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';

const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <FlexBetween sx={{ maring: '20px 0' }}>
      <Button
        variant='outlined'
        onClick={() => { navigate('/dashboard') }}
      >
        Return
    </Button>
      <Button
        variant='outlined'
        onClick={() => { location.reload(); }}
      >
        Reset
    </Button>
    </FlexBetween>
  )
}

const Settings = () => {
  return (
    <Box>
      settings
    </Box>
  )
}

export default Settings
