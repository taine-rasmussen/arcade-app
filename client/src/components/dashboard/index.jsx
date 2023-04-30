import { Box, useTheme, useMediaQuery } from '@mui/material';
import { setMenuToggle } from '../../state/index';
import { useDispatch } from 'react-redux';

import Stats from './stats';
import Games from './games';
import Profile from './profile';
import RecentlyPlayed from './recentlyPlayed';

const Dashboard = () => {

  const theme = useTheme();
  const dispatch = useDispatch()
  const alt = theme.palette.background.alt
  const main = theme.palette.background.default

  const isNonMobileScreens = useMediaQuery('(min-width:1300px)');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: main,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {isNonMobileScreens && (
        <Box
          sx={{
            width: '20%',
            height: '100%',
            display: 'flex',
            padding: '1.5rem',
            background: main
          }}
        >
          <Profile />
        </Box>
      )}
      <Box
        sx={{
          gap: '1.5rem',
          padding: '3rem',
          display: 'flex',
          background: alt,
          borderRadius: '2rem',
          flexDirection: 'column',
          width: isNonMobileScreens ? '80%' : '100%',
          height: isNonMobileScreens ? '100%' : '90%',
        }}
      >
        <Box
          sx={{
            gap: '1.5rem',
            height: '80%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Stats />
          <Games />
        </Box>
        <RecentlyPlayed />
      </Box>
    </Box >
  )
}

export default Dashboard
