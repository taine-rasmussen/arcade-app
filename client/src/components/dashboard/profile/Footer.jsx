import { Box, useTheme } from '@mui/material';
import { styled } from "@mui/system"

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
      <PillWrapper>
        RANK
        </PillWrapper>
      <PillWrapper>
        SHOP
        </PillWrapper>
      <PillWrapper>
        SOMETHING??
        </PillWrapper>
    </Box>
  )
}

export default Footer
