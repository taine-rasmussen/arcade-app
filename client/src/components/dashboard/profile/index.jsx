import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Profile = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} height={40} width={35}>
      <Box
        sx={{
          gap: '1rem',
          height: '60%',
          display: 'flex',
          minWidth: 'max-content',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Body />
        <Footer />
      </Box>
    </WidgetWrapper>
  )
}

export default Profile
