import { Box, useTheme } from '@mui/material';
import { styled } from "@mui/system"

import MenuItemWrapper from '../../../wrapper/MenuItemWrapper'

const Footer = () => {
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
        border: '2px solid red',
        justifyContent: 'space-between'
      }}
    >
      <MenuItemWrapper width={100} height={95}>
        RANK
        </MenuItemWrapper>
      <MenuItemWrapper width={100} height={95}>
        SHOP
        </MenuItemWrapper>
      <MenuItemWrapper width={100} height={95}>
        SOMETHING??
        </MenuItemWrapper>
    </Box>
  )
}

export default Footer
