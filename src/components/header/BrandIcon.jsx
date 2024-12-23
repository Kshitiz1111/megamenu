import { ChevronLeft } from 'lucide-react'
import React from 'react'



const BrandIcon = ({ breadcrum, setSelectedMenu }) => {
   return (
      <div style={{ display: "flex", alignItems: "center", fontSize: 18 + "px" }} onClick={() => setSelectedMenu(undefined)}>
         {breadcrum &&
            <ChevronLeft style={{ marginRight: 20 + "px", marginLeft: -10 + "px" }} />
         }
         <span style={breadcrum && { fontWeight: 600 }}>{breadcrum || "LOGO"}</span>
      </div>
   )
}

export default BrandIcon