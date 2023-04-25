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
        width: '100%',
        height: '100%',
        padding: '2rem',
        flexWrap: 'wrap',
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
          gap: '3rem',

          // justifyContent: 'space-between',
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
