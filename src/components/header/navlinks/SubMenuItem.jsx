import React from 'react'
import style from './navlinks.module.css'
import { featuredMealTime } from '@/constant/data'
import Link from 'next/link'
import ImageSwiper from '@/components/image_swiper/ImageSwiper'
import { Underline } from 'lucide-react'

const SubMenuItem = ({ subMenu, titleName }) => {
   console.log("subMenu", subMenu)
   return (
      <div className={style.sub_menu}>
         <div className={style.links}>
            <ul>
               {subMenu.map((item) => (
                  <li key={item.name}>{item.name}</li>
               ))}
            </ul>
            <span style={{ fontStyle: 'italic', fontSize: "12px", paddingLeft: "10px", textDecoration: "underline" }}>All {titleName}</span>
         </div>
         <div id='features' className={style.features}>
            <div className={style.feature_mealtime_swiper_container}>
               <div className={style.slider_header}>
                  <p>Featured {titleName}</p>
                  <Link href="#">Shop all</Link>

                  {/* {!isMobile &&
                     <>
                        <p style={{ fontWeight: 600 }}>Featured {titleName}</p>
                        <div className={style.swiper_nav}>

                        </div>
                     </>
                  } */}
               </div>
               <ImageSwiper items={featuredMealTime} />
            </div>
         </div>
      </div >
   )
}

export default SubMenuItem