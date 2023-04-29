import { Box, useTheme, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
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
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      style={{
        width: '100 %',
        height: '100 %'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          gap: '1.5rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}

      >
        <SwiperSlide style={swiperSlideStyle}>
          {/* {recentlyPlayed.map((game, i) => (
              <GameCard
                game={game}
                key={i}
              />
            ))} */}
            hello
          </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          {/* {recentlyPlayed.map((game, i) => (
              <GameCard
                game={game}
                key={i}
              />
            ))} */}
            hello
          </SwiperSlide>

      </Box>
    </Swiper>
  )
}

export default SwiperWidget
