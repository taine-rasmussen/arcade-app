import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, useTheme, Typography } from '@mui/material';
import { SwiperSlide } from "swiper/react";

const GameCard = ({ game }) => {

  const theme = useTheme();
  const hightlight = theme.palette.primary.hightlight
  const swiperSlideStyle = {
    textAlign: 'center',
    fontSize: '18px',
    background: ' #fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <SwiperSlide
      style={swiperSlideStyle}
    >
      <Box
        sx={{
          zIndex: '3',
          width: '55px',
          height: '55px',
          display: 'flex',
          padding: '15px',
          alignItems: 'center',
          background: hightlight,
          borderRadius: '0.75rem',
          justifyContent: 'center',
          margin: '0px 0px -15px 30px',

        }}
      >
        <EmojiEventsIcon sx={{ color: '#fff', fontSize: '2rem' }} />
      </Box>
      <Box
        sx={{
          zIndex: '1',
          height: '80%',
          width: '90%',
          background: '#fff',
          borderRadius: '2rem',
        }}
      >
        {game}
      </Box>
    </SwiperSlide>
  )
}

export default GameCard
