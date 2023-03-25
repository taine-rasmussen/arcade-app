import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import FlexBetween from '../../../wrapper/FlexBetween';


import { Box, useTheme } from '@mui/material'


const Profile = () => {

  const theme = useTheme();

  return (
    <WidgetWrapper theme={theme}>
      <Box
        sx={{
          border: '2px solid #fff',
          width: '40%'
        }}
      >
        Hello
      </Box>

    </WidgetWrapper>
  )
}

export default Profile
