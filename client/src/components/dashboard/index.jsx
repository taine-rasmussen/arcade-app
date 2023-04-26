import { Box, useTheme, useMediaQuery } from '@mui/material';

import Stats from './stats';
import Games from './games';
import Profile from './profile';
import RecentlyPlayed from './recentlyPlayed';

const Dashboard = () => {

  const theme = useTheme();
  const main = theme.palette.background.default
  const alt = theme.palette.background.alt

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <Box
      sx={{
        gap: '1.5rem',
        width: '100%',
        height: '100%',
        background: main,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          width: '40%',
          height: '100%',
          display: 'flex',
          padding: '1.5rem',
          background: main
        }}
      >
        <Profile />
      </Box>
      <Box
        sx={{
          gap: '1.5rem',
          width: '100%',
          padding: '3rem',
          height: '100%',
          display: 'flex',
          background: alt,
          borderRadius: '2rem',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
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
