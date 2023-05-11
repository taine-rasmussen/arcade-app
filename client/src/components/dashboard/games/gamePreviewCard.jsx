import { Box, Typography, useTheme } from "@mui/material";
import { setRecentlyPlayed } from '../../../state/index';
import tictactoe from '../../../assets/tictactoe.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

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

  const imageSources = [
    { pong: tictactoe, },
    { snake: tictactoe, },
    { memory: tictactoe, },
    { tictactoe: tictactoe, },
    { mineSweeper: tictactoe, },
  ];

  const imgStyles = {
    height: '70%',
    width: '70%',
    borderRadius: '0.25rem',
  }

  const currentPreviewImage = useMemo(
    () => {
      imageSources.map((game) => {
        if (Object.keys(game)[0] == title) {
          console.log(title, game)
        }
      })
    }, []
  )

  // console.log(Object.keys(imageSources[0])[0])
  console.log(currentPreviewImage)

  return (
    <Box
      sx={{
        width: '250px',
        height: '225px',
        display: 'flex',
        background: bgColor,
        alignItems: 'center',
        borderRadius: '2rem',
        flexDirection: 'column',
        justifyContent: 'center',
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
