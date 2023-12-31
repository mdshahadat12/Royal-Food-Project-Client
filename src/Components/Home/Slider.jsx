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
        <SwiperSlide><div className='border border-gray-950 p-5 w-full h-full'><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 p-5 w-full h-full'><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 p-5 w-full h-full'><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 p-5 w-full h-full'><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 p-5 w-full h-full'><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 p-5 w-full h-full'><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='border border-gray-950 p-5 w-full h-full'><img src="https://i.ibb.co/xD0JGs0/MD-Shahadat.png" alt="" /></div></SwiperSlide>
        
      </Swiper>
    </>
  );
}
