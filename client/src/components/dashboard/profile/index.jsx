import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material';

import Header from './Header'

const Profile = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} width={35}>
      <Box
        sx={{
          border: '2px solid #fff',
          borderRadius: '20px',
          padding: '1.5rem',
          height: '60%',
          display: 'flex',
          flexDirection: 'column'

        }}
      >

      </Box>
    </WidgetWrapper>
  )
}

export default Profile
