import { Box, useTheme } from '@mui/material';

import Profile from './profile';
import Games from './games';

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
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Profile />
      <Games />
    </Box >
  )
}

export default Dashboard
