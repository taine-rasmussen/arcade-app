import { Box, useTheme, Typography } from '@mui/material';

const GameCard = ({ game }) => {

  const theme = useTheme();
  const main = theme.palette.primary.alt

  return (
    <Box
      sx={{
        height: '80%',
        width: '80%',
        background: '#fff',
        borderRadius: '0.75rem',
      }}
    >
      {game}
    </Box>
  )
}

export default GameCard
