import React from 'react'
import style from './navlinks.module.css'
import { bestSellerImages, menu } from '@/constant/data'
import { ArrowRight } from 'lucide-react'
import ImageSwiper from '@/components/image_swiper/ImageSwiper'
import Link from 'next/link'

const MainMenuItem = ({ setSelectedMenu, isMobile = true }) => {
   return (
      <div className={isMobile ? style.main_menu : style.d_main_menu}>
         {isMobile &&
            <div className={style.best_seller_swiper_container}>
               <div className={style.slider_header}>
                  <p>Best Seller</p>
                  <Link href="#">Shop all</Link>
               </div>
               <ImageSwiper items={bestSellerImages} />
            </div>
         }
         <div style={{ position: "relative" }}>
            <ul>
               {menu.map((item) => (
                  <li key={item.id} onClick={() => setSelectedMenu(item)}>
                     <div style={{ display: "flex", position: 'relative' }}>
                        <p>{item.name}</p>
                        {!isMobile && item?.new &&
                           <span style={{ height: "fit-content", fontSize: "12px", fontWeight: "600", marginLeft: "-10px", padding: "2px 4px", borderRadius: "50px", color: "#3057a7" }}>{item?.new}</span>
                        }
                     </div>
                     {isMobile &&
                        <ArrowRight style={{ width: "18px", margin: "0px 10px" }} />
                     }
                  </li>
               ))
               }
            </ul>
            {isMobile &&
               <span style={{ paddingLeft: "10px" }}>Shop all</span>
            }
         </div>
      </div >
   )
}

export default MainMenuItem