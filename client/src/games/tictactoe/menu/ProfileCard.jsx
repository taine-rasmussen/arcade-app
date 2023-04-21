import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import WidgetWrapper from '../../../wrapper/WidgetWrapper'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { GameContext } from '../index';
import { useContext } from 'react';

const ProfileCard = ({ activeTurn }) => {

  const {
    state
  } = useContext(GameContext)

  const {
    players,
    isGameOver,
    playerTurn,
  } = state || {}

  const theme = useTheme()
  const main = theme.palette.background.main
  const borderColor = theme.palette.primary.main
  const loggedInUsername = useSelector((state) => state.user.username)
  const isLoggedInUser = loggedInUsername === name;

  const isActiveTurn = activeTurn === playerTurn

  const iconStlye = {
    fontSize: '4rem'
  }

  return (
    <WidgetWrapper
      theme={theme}
      width={45}
      border={true}
      sx={
        !isGameOver
          ? isActiveTurn
            ? { border: `3px solid ${borderColor}` }
            : {}
          : {}
      }
    >
      <Box
        sx={{
          gap: '1rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'spaceBetween',
        }}
      >
        <Box
          sx={{
            width: '100px',
            height: '100px',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            backgroundColor: main,
            justifyContent: 'center',
          }}
        >
          Pic
        </Box>
        <Typography variant='h2'>
          {activeTurn ? players[0].name : players[1].name}
        </Typography>
        <Typography variant='h3'>
          {isLoggedInUser
            ? < CloseIcon sx={iconStlye} />
            : <TripOriginIcon sx={iconStlye} />}
        </Typography>
      </Box>
    </WidgetWrapper >
  )
}

export default ProfileCard