import ImageSwiper from '@/components/image_swiper/ImageSwiper';
import { featuredMealTime, menu } from '@/constant/data'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react'
import style from './navlinks.module.css'

const MegaMenu = ({ subMenu = [], titleName = "MealTime" }) => {
   const swiperNextRef = useRef(null);
   const swiperPrevRef = useRef(null);
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   const handleNextClick = () => {
      if (swiperNextRef.current) swiperNextRef.current();
   };

   const handlePrevClick = () => {
      if (swiperPrevRef.current) swiperPrevRef.current();
   };

   const handleSwiperUpdate = (swiper) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
   };
   return (
      <div className={style.mega_menu}>
         <div className={style.mega_menu_right_section}>
            <p style={{ fontSize: "20px", fontWeight: 600, marginBottom: "10px" }}>Shop {titleName}</p>
            <div className={style.mega_menu_nav_links}>
               <ul>
                  {subMenu.map((item, index) => (
                     <li key={index}>{item.name}</li>
                  ))}
               </ul>
               <span style={{ fontStyle: 'italic', fontSize: "12px", textDecoration: "underline" }}>All {titleName}</span>
            </div>
         </div>
         <div className={style.mega_menu_left_section}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <p>Feature {titleName}</p>
               <div style={{ display: "flex" }}>
                  <ChevronLeft
                     onClick={handlePrevClick}
                     style={{ color: isBeginning ? "#ccc" : "#000", cursor: isBeginning ? "not-allowed" : "pointer" }}
                  />
                  <ChevronRight
                     onClick={handleNextClick}
                     style={{ color: isEnd ? "#ccc" : "#000", cursor: isEnd ? "not-allowed" : "pointer" }}
                  />
               </div>
            </div>
            <ImageSwiper items={featuredMealTime} initialCount={3.5}
               onNext={(next) => (swiperNextRef.current = next)}
               onPrev={(prev) => (swiperPrevRef.current = prev)}
               onUpdate={handleSwiperUpdate}
            />
         </div>
      </div>
   )
}


export default MegaMenu