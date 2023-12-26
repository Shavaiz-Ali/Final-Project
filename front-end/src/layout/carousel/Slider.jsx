// import React, { useRef, useState } from 'react';
import slide1 from "/slide-1.jpg";
import slide2 from "/slide-2.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, } from 'swiper/modules';

const Slider = () =>{

    const sliderData = [
        {
            id: 1,
            img: slide2,
            category: "Best SmartWatch",

        },
        {
            id: 2,
            img: slide1,
            category: "Top Headphones",
        }
    ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,]}
        className="mySwiper w-full"
      >
        {sliderData.map((item) => (
            <SwiperSlide className='relative w-full' key={item.id} >
                <img src={item.img} alt="slide image" className='w-full'/>
               <div className="absolute top-[50%] -translate-y-[50%] left-[50px] flex flex-col items-start">
                <h3 className='sm:text-[50px] text-[35px] font-[600]'>Best Deal!</h3>
                <h4 className='sm:text-[40px] text-[25px] font-[400] '>{item.category}</h4>
                <p className='text-[16px] font-[500]'>Get upto<span className='text-orange-600 leading-[30px]'>50%</span>off today only</p>
                <button className='h-[45px] w-[120px] bg-yellow-400 text-white flex justify-center items-center rounded-[4px] mt-[25px]'>Shop Now</button>
               </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} 

export default Slider
