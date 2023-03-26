import { Box, useTheme } from '@mui/material';
import { styled } from "@mui/system"

import MenuItemWrapper from '../../../wrapper/MenuItemWrapper'

const Body = () => {
  return (
    <Box
      sx={{
        gap: '1rem',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        display: 'flex',
        padding: '2rem',
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
          border: '2px solid red',
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
          XP GOES HERE
        </MenuItemWrapper>
        <MenuItemWrapper width={100} height={20}>
          COINS GO HERE
        </MenuItemWrapper>
        <MenuItemWrapper width={100} height={20}>
          SOMETHING??
        </MenuItemWrapper>
      </Box>
    </Box>
  )
}

export default Body
