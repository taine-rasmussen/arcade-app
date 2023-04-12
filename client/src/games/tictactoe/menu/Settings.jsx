import { Box, useTheme, useMediaQuery, Typography, Button } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import FlexBetween from '../../../wrapper/FlexBetween'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      style={{ height: '100%', width: '100%', zIndex: '2' }}
      animate={{ x: ['300px', '0px'], opacity: 1 }}
      transition={{ type: 'tween', duration: 0.6, delay: 0.77 }}
    >
      <WidgetWrapper
        theme={theme}
        width={100}
        height={100}
      >
        <NavHeader />
      </WidgetWrapper>
    </motion.div>
  )
}

export default Settings
