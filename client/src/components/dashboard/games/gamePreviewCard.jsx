import { setRecentlyPlayed } from '../../../state/index';
import GamePreviewCard from './GamePreviewCard';
import { Box, Typography } from "@mui/material"
import { Box, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';


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
