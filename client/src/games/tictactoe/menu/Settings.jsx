import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';
import EditGameModeWidget from './EditGameModeWidget';
import EditNameWidget from './EditNameWidget';
import SettingsHeader from './SettingsHeader';
import { useContext, useMemo } from 'react';
import Divider from '@mui/material/Divider';
import { GameContext } from '../index';
import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import ScoreCard from './ScoreCard';


const SettingsDivder = () => (
  <Divider orientation="vertical" variant="middle">
    <Chip label="Settings" />
  </Divider>
)

const Settings = () => {
  const theme = useTheme();
  const main = theme.palette.background.main;
  const { state: { session }, dispatch } = useContext(GameContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: ['300px', '0px'], opacity: 1 }}
      transition={{ type: 'tween', duration: 0.6, delay: 0.75 }}
      style={{ height: '100%', width: '100%', zIndex: '2', overflow: 'hidden' }}
    >
      <WidgetWrapper
        theme={theme}
        width={100}
        height={100}
      >
        <SettingsHeader />
        <Divider />
        <Box sx={{
          height: '80%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '10px'
        }}>
          <Box
            sx={{
              gap: '2rem',
              width: '45%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <WidgetWrapper
              theme={theme}
              width={100}
              height={40}
              style={{ background: main }}
            >
              <EditGameModeWidget />
            </WidgetWrapper>
            <WidgetWrapper
              theme={theme}
              width={100}
              height={40}
              style={{ background: main }}
              onClick={() => { dispatch({ type: 'update2pName', payload: 'test' }) }}
            >
              <EditNameWidget />
            </WidgetWrapper>
          </Box>

          <SettingsDivder />

          <Box sx={{
            width: '45%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                variant='h3'
              >
                Current Session:
              </Typography>

            </Box>
            <Box
              sx={{
                gap: '1rem',
                height: '90%',
                display: 'flex',
                overflowY: 'auto',
                overflowX: 'hidden',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              {session.map((result, i) => (
                <ScoreCard result={result} key={i} />
              )
              )}
            </Box>
          </Box>
        </Box>
      </WidgetWrapper>
    </motion.div>
  )
}

export default Settings
