import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './imageswiper.css'
// import required modules
import { Pagination } from 'swiper/modules';

export default function ImageSwiper({ items, initialCount = 2.5, onNext, onPrev, onUpdate }) {
   const swiperRef = useRef(null);
   return (
      <>
         <Swiper
            slidesPerView={initialCount}
            spaceBetween={10}
            onSwiper={(swiper) => {
               swiperRef.current = swiper;
               if (onNext) onNext(() => swiper.slideNext());
               if (onPrev) onPrev(() => swiper.slidePrev());
               if (onUpdate) onUpdate(swiper);
            }}
            onSlideChange={(swiper) => {
               if (onUpdate) onUpdate(swiper);
            }}
            modules={[Pagination]}
            className='mySwiper'
         >
            {items.map((item) => (
               <SwiperSlide key={item.id} >
                  <div key={item.id} style={{ display: "block" }}>
                     <div className=''>
                        <img src={item.imgUrl} alt="" />
                     </div>
                     {item.details &&
                        <div className='swiper-detail'>
                           <span>{item.details.category.toUpperCase()}</span>
                           <p>{item.details.name}</p>
                        </div>
                     }
                  </div>

               </SwiperSlide>
            ))}

         </Swiper >
      </>
   );
}
