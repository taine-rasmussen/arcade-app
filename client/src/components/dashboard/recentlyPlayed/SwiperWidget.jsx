import { Box, useTheme, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import GameCard from './gameCard'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode, Pagination, Navigation } from 'swiper';


const SwiperWidget = () => {

  const recentlyPlayed = useSelector((state) => state.recentlyPlayed)

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        dispaly: 'flex',
        flexDirection: 'row',
      }}
    >
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        style={{
          height: '100%',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        {recentlyPlayed.map((game, i) => (
          <SwiperSlide key={i}>
            <GameCard
              game={game}
              key={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box >
  )
}

export default SwiperWidget
