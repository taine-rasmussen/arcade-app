import { Box, useTheme } from '@mui/material';

import Profile from './profile';
import Games from './games';
import RecentlyPlayed from './recentlyPlayed';

const Dashboard = () => {

  const theme = useTheme();
  const alt = theme.palette.background.alt

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
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
          flexWrap: 'flex',
          flexDirection: 'row',
          border: '2px solid red',
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
          border: '2px solid red',
          justifyContent: 'space-between'
        }}
      >
        <RecentlyPlayed />
      </Box>
    </Box >
  )
}

export default Dashboard
