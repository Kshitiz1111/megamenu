import React from 'react'
import BrandIcon from './BrandIcon'
import MainMenuItem from './navlinks/MainMenuItem'
import SubMenuItem from './navlinks/SubMenuItem'

const DesktopHeaderContainer = ({ isMobile }) => {
   return (
      <div>
         <div style={{ width: "100%", padding: "10px", textAlign: "center", background: "#0e234c", color: "white", fontWeight: 100, fontSize: "14px" }}>
            <span>This is a global announcement!</span>
            <span style={{ float: 'right' }}>X</span>
         </div>
         <div style={{ padding: "1rem 2rem", display: "flex", alignItems: "center", flexWrap: "nowrap", backgroundColor: "white" }}>
            <p style={{ fontSize: "2rem" }}>LOGO</p>
            <MainMenuItem isMobile={isMobile} setSelectedMenu={() => { }} />
         </div>
      </div>
   )
}

export default DesktopHeaderContainer