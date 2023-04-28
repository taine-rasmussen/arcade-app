import { Box, useTheme, Typography } from '@mui/material';

const GameCard = ({ game }) => {

  const theme = useTheme();
  const main = theme.palette.primary.alt

  return (
    <Box
      sx={{
        background: main,
        height: '40%',
        width: '40%'
      }}
    >
      {game}
    </Box>
  )
}

export default GameCard
