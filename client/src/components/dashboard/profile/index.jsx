import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material';

import Header from './Header'
import Body from './Body'

const Profile = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} width={35}>
      <Box
        sx={{
          gap: '1rem',
          height: '60%',
          display: 'flex',
          padding: '1.5rem',
          borderRadius: '20px',
          flexDirection: 'column',
          border: '2px solid #fff',
        }}
      >
        <Header />
        <Body />
      </Box>
    </WidgetWrapper>
  )
}

export default Profile
