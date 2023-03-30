import { Box, useTheme } from '@mui/material';

import Stats from './stats';
import Games from './games';
import Profile from './profile';
import RecentlyPlayed from './recentlyPlayed';

const Dashboard = () => {

  const theme = useTheme();
  const alt = theme.palette.background.alt

  return (
    <Box
      sx={{
        gap: '1rem',
        height: '100%',
        width: '100%',
        flexWrap: 'wrap',
        padding: '3rem',
        background: alt,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          height: '50%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <RecentlyPlayed />
        <Stats />
      </Box>
    </Box >
  )
}

export default Dashboard
