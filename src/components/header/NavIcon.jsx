"use client"
import React from 'react'
import style from './header.module.css'

const NavIcon = ({ setNavOpen, navOpen }) => {
   console.log(navOpen)
   return (
      <div onClick={() => setNavOpen(!navOpen)} className={`${style.toggel_menu_item_default} ${!navOpen ? "" : style.active}`} id="menu_toggle">
         <span></span>
         <span></span>
         <span></span>
      </div >
   )
}

export default NavIcon