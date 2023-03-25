import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme } from '@mui/material'

const Profile = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme} width={35} height={50}>
      <Box
        sx={{
          border: '2px solid #fff',
        }}
      >
        Hello
        </Box>
    </WidgetWrapper>
  )
}

export default Profile
