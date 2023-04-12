import { Box, useTheme, useMediaQuery, Typography, Button } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import FlexBetween from '../../../wrapper/FlexBetween'
import { useNavigate } from 'react-router-dom';

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

  const theme = useTheme();

  return (
    <WidgetWrapper
      theme={theme}
      width={100}
      height={60}
      style={{ zIndex: '2' }}
    >
      <NavHeader />
    </WidgetWrapper>
  )
}

export default Settings
