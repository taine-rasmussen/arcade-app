import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Profile = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} height={100} width={35} sx={{ transition: 'ease-out all 0.35s' }}>
      <Box
        sx={{
          gap: '1rem',
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
    </WidgetWrapper>
  )
}

export default Profile
