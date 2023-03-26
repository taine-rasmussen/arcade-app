import { Box, useTheme } from '@mui/material';
import Profile from './profile';

const Dashboard = () => {

  const theme = useTheme();
  const alt = theme.palette.background.alt

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        padding: '3rem',
        background: alt,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      <Profile />
    </Box >
  )
}

export default Dashboard
