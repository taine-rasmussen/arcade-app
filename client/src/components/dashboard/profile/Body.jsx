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
        border: '2px solid red',
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
        <PillWrapper>
          XP GOES HERE
        </PillWrapper>
        <PillWrapper>
          COINS GO HERE
        </PillWrapper>
        <PillWrapper>
          SOMETHING??
        </PillWrapper>
      </Box>
    </Box>
  )
}

export default Body
