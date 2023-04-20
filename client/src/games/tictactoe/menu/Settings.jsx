import { Box, useTheme, useMediaQuery, Typography, Button } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import FlexBetween from '../../../wrapper/FlexBetween'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import SettingsHeader from './SettingsHeader';
import { useContext, useMemo } from 'react';
import Divider from '@mui/material/Divider';
import { GameContext } from '../index';
import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import ScoreCard from './ScoreCard';

const Settings = () => {
  const theme = useTheme();
  const {
    state: {
      players,
      session,
      isGameOver,
      playerTurn,
    }
  } = useContext(GameContext)

  const winner = useMemo(
    () => {
      if (isGameOver) {
        return !playerTurn
      } else {
        return undefined
      }
    }, [playerTurn, isGameOver]
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      style={{ height: '100%', width: '100%', zIndex: '2', overflow: 'hidden' }}
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
                {isGameOver ? winner ? players[0].name : players[1].name : ''}
              </Typography>
            </FlexBetween>
          </Box>

          <Divider
            orientation="vertical"
            variant="middle"
          >
            <Chip label="Settings" />
          </Divider>

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
