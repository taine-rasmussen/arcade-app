import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material'

const Profile = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} width={35}>
      <Box
        sx={{
          border: '2px solid #fff',
          borderRadius: '20px',
          padding: '1.5rem',
          height: '60%'
        }}
      >
        Hello
        </Box>
    </WidgetWrapper>
  )
}

export default Profile
