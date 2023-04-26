import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Profile = () => {

  const theme = useTheme();

  return (
    <Box
      sx={{
        gap: '1rem',
        width: '100%',
        height: '100%',
        display: 'flex',
        minWidth: 'max-content',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Body />
      <Footer />
    </Box>
  )
}

export default Profile
