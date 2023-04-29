import { Box, useTheme, Typography } from '@mui/material';
import { Swiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { useSelector } from 'react-redux'
import GameCard from './gameCard'
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css";

const SwiperWidget = () => {

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

  const swiperSlideStyle = {
    textAlign: 'center',
    fontSize: '18px',
    background: ' #fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <Box
      sx={{
        width: '90%',
        height: '100%',
        dispaly: 'flex',
        flexDirection: 'row'
      }}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {recentlyPlayed.map((game, i) => (
          <GameCard
            game={game}
            key
            ={i}
          />
        ))}
      </Swiper>
    </Box>
  )
}

export default SwiperWidget
