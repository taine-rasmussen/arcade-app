import { Box, Typography, useTheme } from "@mui/material";
import { setRecentlyPlayed } from '../../../state/index';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import tictactoe from '../../../assets/tictactoe.png'


const GamePreviewCard = ({ title }) => {

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dark = theme.palette.primary.dark
  const bgColor = theme.palette.background.default

  const navToGame = (game) => {
    navigate(`/${game}`)
    dispatch(setRecentlyPlayed({ game: game }))
  }

  const previewImage = (title) => {
    if (title == 'tictactoe') {
      return tictactoe
    }
  }

  const imgStyles = {
    height: '135px',
    width: '135px',
  }



  return (
    <Box
      sx={{
        background: bgColor,
        height: '225px',
        width: '250px',
        borderRadius: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant='h2'
        color={dark}
        onClick={() => navToGame(title)}
        sx={{
          '&:hover': {
            cursor: 'pointer'
          }
        }}
      >
        {title}
      </Typography>

      <img src={tictactoe} alt='game preview' style={imgStyles} />
    </Box>
  )
}

export default GamePreviewCard
