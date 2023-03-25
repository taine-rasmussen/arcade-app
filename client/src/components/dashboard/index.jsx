import { Box, useTheme } from '@mui/material';
import Profile from './profile/Profile';


const Dashboard = () => {

  const theme = useTheme();
  const alt = theme.palette.background.alt

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        background: alt,
        height: '100%',
        padding: '3rem',
      }}
    >
      <Profile />
    </Box >
  )
}

export default Dashboard
