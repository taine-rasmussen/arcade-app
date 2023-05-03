import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';
import { setRecentlyPlayed } from '../../../state/index';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const GAMESLIST = [
  'Pong',
  'Snake',
  'Memory',
  'TicTacToe',
  'MineSweeper',
];

const Games = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const light = theme.palette.primary.light
  const dark = theme.palette.primary.dark
  const bgColor = theme.palette.background.default

  const navToGame = (game) => {
    navigate(`/${game}`)
    dispatch(setRecentlyPlayed({ game: game }))
  }

  return (
    <WidgetWrapper
      bg={light}
      width={77}
      height={100}
      sx={{
        gap: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {
        GAMESLIST.map((title, i) => {
          return (
            <Box
              key={i}
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
            </Box>
          )
        })
      }
    </WidgetWrapper >
  )
}

export default Games
