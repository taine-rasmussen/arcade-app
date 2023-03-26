import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Profile = () => {

  const theme = useTheme();
  const light = theme.palette.primary.light

  return (
    <WidgetWrapper theme={theme} width={35}>
      <Box
        sx={{
          gap: '1rem',
          height: '60%',
          display: 'flex',
          padding: '1.5rem',
          background: light,
          borderRadius: '40px',
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
