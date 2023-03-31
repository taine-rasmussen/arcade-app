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
        gap: '1rem',
        height: '100%',
        width: '100%',
        flexWrap: 'wrap',
        padding: '3rem',
        background: main,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          height: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: !isNonMobileScreens ? 'column' : 'row',
        }}
      >
        <Profile />
        <Games />
      </Box>

      <Box
        sx={{
          height: '50%',
          display: 'flex',
          flexWrap: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: !isNonMobileScreens ? 'column' : 'row',
        }}
      >
        <RecentlyPlayed />
        <Stats />
      </Box>
    </Box >
  )
}

export default Dashboard
