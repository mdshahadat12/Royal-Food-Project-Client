// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 w-full h-full'></div></SwiperSlide>
      </Swiper>
    </>
  );
}
