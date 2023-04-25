import { Box, useTheme, useMediaQuery } from '@mui/material';

import Stats from './stats';
import Games from './games';
import Profile from './profile';
import RecentlyPlayed from './recentlyPlayed';

const Dashboard = () => {

  const theme = useTheme();
  const main = theme.palette.background.main

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: '3rem',
        background: main,
        flexDirection: 'row',
        gap: '1.5rem'
      }}
    >
      <Box
        sx={{
          width: '40%',
          height: '100%',
          display: 'flex',
        }}
      >
        <Profile />
      </Box>

      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',

        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1.5rem',
            flexDirection: 'row',
            width: '100%',
            height: '80%'
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
