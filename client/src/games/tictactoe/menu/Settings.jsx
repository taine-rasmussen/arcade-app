import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';
import EditNameWidget from './EditNameWidget';
import EditGameMode from './EditGameMode';
import BtnGroup from './BtnGroup';
import { useContext, useMemo } from 'react';
import Divider from '@mui/material/Divider';
import { GameContext } from '../index';
import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import ScoreCard from './ScoreCard';

const SettingsDivder = () => (
  <Divider orientation="vertical" variant="middle">
    <Chip label="Settings / Session" />
  </Divider>
)

const Settings = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const main = theme.palette.background.main;
  const { state: { session } } = useContext(GameContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: ['300px', '0px'], opacity: 1 }}
      transition={{ type: 'tween', duration: 0.6, delay: 0.75 }}
      style={{
        height: '100%',
        width: '100%',
        zIndex: '2',
        overflow: 'hidden'
      }}
    >
      <BtnGroup />
      <Divider />

      <EditGameMode />

      <EditNameWidget />

      <SettingsDivder />

      <Box sx={{
        width: '55%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
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
    </motion.div >
  )
}

export default Settings
