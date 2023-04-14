import { Box, useTheme, useMediaQuery, Typography, Button } from '@mui/material';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import FlexBetween from '../../../wrapper/FlexBetween'
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import { useState } from 'react'

const SettingsHeader = () => {
  const navigate = useNavigate();
  return (
    <FlexBetween sx={{ padding: '10px 0px' }}>
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
      transition={{ type: 'tween', duration: 0.6, delay: 0.75 }}
    >
      <WidgetWrapper
        theme={theme}
        width={100}
        height={100}
      >
        <SettingsHeader />
        <Divider />
        <Box sx={{
          height: '87%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '10px'
        }}>
          <Box sx={{ width: '45%' }}>
            <FlexBetween>
              <Typography
                variant='h3'
              >
                Winner:
              </Typography>
              <Typography
                variant='h3'
              >
                name
              </Typography>
            </FlexBetween>
          </Box>

          <Divider
            orientation="vertical"
            variant="middle"
          >
            <Chip label="Settings" />
          </Divider>

          <Box sx={{ width: '45%', display: 'flex', justifyContent: 'center' }}>
            <Typography
              variant='h3'
            >
              Current Session
            </Typography>
          </Box>
        </Box>
      </WidgetWrapper>
    </motion.div>
  )
}

export default Settings
