import { Box, useTheme } from '@mui/material';
import { styled } from "@mui/system"

const PillWrapper = styled(Box)(() => ({
  height: '20%',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  border: '2px solid red',
}));

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

    </Box>
  )
}

export default Footer
