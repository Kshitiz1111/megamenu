import React from 'react'
import style from '../header.module.css'

const NavContainer = ({ navOpen, children }) => {
   return (
      <div className={`${!navOpen ? style.nav_item_container_default : style.nav_item_container_active}`} >
         {children}
      </div>
   )
}

export default NavContainer