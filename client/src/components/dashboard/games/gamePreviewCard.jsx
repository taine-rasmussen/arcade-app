import GamePreviewCard from './GamePreviewCard';
import { Box, Typography } from "@mui/material"
import { Box, useTheme } from '@mui/material';


const GamePreviewCard = (props) => {



  return (
    <Box
      sx={{
        border: '3px solid red'
      }}
    >
      <Typography
        variant='h3'
        color='white'
        onClick={() => navToGame(game)}
      >
        {game}
      </Typography>
    </Box>
  )
}

export default GamePreviewCard
