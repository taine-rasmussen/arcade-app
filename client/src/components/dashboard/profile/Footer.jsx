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
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
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
