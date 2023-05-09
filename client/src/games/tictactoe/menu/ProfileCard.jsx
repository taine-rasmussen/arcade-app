import TripOriginIcon from '@mui/icons-material/TripOrigin';
import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { GameContext } from '../index';
import { useContext } from 'react';
import profile from '../../../assets/profile.jpeg'

const ProfileCard = ({ activeTurn }) => {

  const {
    state
  } = useContext(GameContext)

  const {
    players,
    isGameOver,
    playerTurn,
    isSinglePlayerMode
  } = state || {}

  const theme = useTheme()
  const alt = theme.palette.primary.alt
  const light = theme.palette.primary.light
  const main = theme.palette.background.main
  const isActiveTurn = activeTurn === playerTurn
  const borderColor = theme.palette.primary.highlight

  const iconStlye = {
    fontSize: '4rem'
  }

  return (
    <WidgetWrapper
      bg={light}
      width={50}
      border={true}
      sx={
        !isGameOver
          ? isActiveTurn
            ? { border: `4px solid ${borderColor}` }
            : {}
          : { border: `4px solid ${alt} ` }
      }
    >
      <Box
        sx={{
          gap: '1rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            backgroundColor: main,
            justifyContent: 'center',
          }}
        >
          <img
            src={profile}
            style={{
              width: '125px',
              height: '125px',
              border: '3px solid #000'
            }}
          />
        </Box>
        <Typography variant='h3'>
          {activeTurn ? players[0].name : isSinglePlayerMode ? 'AI' : players[1].name}
        </Typography>
        <Typography variant='h3'>
          {activeTurn
            ? <CloseIcon sx={iconStlye} />
            : <TripOriginIcon sx={iconStlye} />}
        </Typography>
      </Box>
    </WidgetWrapper >
  )
}

export default ProfileCard