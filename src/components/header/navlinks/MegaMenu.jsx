import ImageSwiper from '@/components/image_swiper/ImageSwiper';
import { featuredMealTime, menu, subs } from '@/constant/data'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react'
import style from './navlinks.module.css'
import AgeSelector from './AgeSelector';
import HoverElement from './HoverElement';

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
                     <li key={index}>{item.name}
                        {item.name == 'Play Box Subscription' && <HoverElement />}
                     </li>
                  ))}
               </ul>
               <span style={{ fontStyle: 'italic', fontSize: "12px", textDecoration: "underline" }}>All {titleName}</span>
            </div>
         </div>
         <div className={style.mega_menu_left_section}>
            {!(titleName.toLowerCase() == "the play boxes") ?
               <>
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
               </>
               :
               <div style={{ display: "flex", justifyContent: "space-between", marginRight: "30px" }}>
                  <AgeSelector />

                  <div>
                     <p>Play Box Gifts & Subscriptions</p>
                     <div style={{ display: "flex", gap: "5px" }}>
                        {subs.map((item) => (
                           <div key={item.id} style={{ display: "block", width: "160px", height: "220px", background: "#f2f2f2" }}>
                              <div className=''>
                                 <img src={item.imgUrl} alt="" style={{ width: "150px" }} />
                              </div>
                              {item.details &&
                                 <div className='swiper-detail'>
                                    <span>{item.details.category.toUpperCase()}</span>
                                    <p style={{ fontSize: "18px", color: "black", fontWeight: 400 }}>{item.details.name}</p>
                                    <p style={{ fontSize: '14px', fontStyle: "italic", color: "#3057A7" }}>{item.details.price}</p>
                                 </div>
                              }
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            }
         </div>
      </div >
   )
}


export default MegaMenu