"use client"
import React, { useState } from 'react'
import NavIcon from './NavIcon'
import BrandIcon from './BrandIcon'
import style from './header.module.css'
import NavContainer from './navlinks/NavContainer'
import MainMenuItem from './navlinks/MainMenuItem'
import SubMenuItem from './navlinks/SubMenuItem'

const HeaderContainer = () => {
   const [navOpen, setNavOpen] = useState(false);
   const [selectedMenu, setSelectedMenu] = useState(undefined)
   console.log(selectedMenu)
   return (
      <div className={style.header}>
         <BrandIcon breadcrum={selectedMenu?.breadcrum} setSelectedMenu={setSelectedMenu} />
         <NavIcon setNavOpen={setNavOpen} navOpen={navOpen} />
         <NavContainer navOpen={navOpen} >
            {selectedMenu !== undefined && selectedMenu?.subMenu &&
               <SubMenuItem subMenu={selectedMenu?.subMenu} titleName={selectedMenu?.name} />
            }
            <MainMenuItem setSelectedMenu={setSelectedMenu} />
         </NavContainer>

      </div>
   )
}

export default HeaderContainer