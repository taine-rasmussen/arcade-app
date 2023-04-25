import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuItemWrapper from '../../../wrapper/MenuItemWrapper'
import { Box, useTheme, Typography } from '@mui/material';
import FlexBetween from '../../../wrapper/FlexBetween'

const Body = () => {
  return (
    <Box
      sx={{
        gap: '1rem',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        display: 'flex',
        padding: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          width: '150px',
          height: '150px',
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        IMAGE
      </Box>
      <Box
        sx={{
          gap: '1rem',
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuItemWrapper width={100} height={20}>
          <Box
            sx={{
              width: '100%',
              padding: '5px',
              display: 'flex',
              flexDirection: 'row',
              border: '1.5px solid red',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="h4"
            >
              XP
            </Typography>
            <Typography
              variant="h4"
            >
              34/50
            </Typography>
          </Box>
        </MenuItemWrapper>
        <MenuItemWrapper width={100} height={20}>
          <FlexBetween sx={{ width: '100%' }}>
            <Typography
              variant="h4"
            >
              40
            </Typography>
            <MonetizationOnIcon />
          </FlexBetween>
        </MenuItemWrapper>
      </Box>
    </Box>
  )
}

export default Body
