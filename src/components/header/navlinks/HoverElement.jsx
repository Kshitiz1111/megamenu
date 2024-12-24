"use client"
import { Badge, Hexagon, Star, Triangle } from 'lucide-react'
import React from 'react'
import style from './navlinks.module.css'

const HoverElement = () => {
   return (
      <div className={style.hover_element_div}>
         <Badge />
         <Star />
         <Hexagon />
         <Triangle />
      </div>
   )
}

export default HoverElement