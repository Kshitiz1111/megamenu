import React, { useState, useRef, useEffect } from 'react';
import BrandIcon from './BrandIcon';
import MainMenuItem from './navlinks/MainMenuItem';
import MegaMenu from './navlinks/MegaMenu';

const DesktopHeaderContainer = ({ isMobile }) => {
   const [selectedMenu, setSelectedMenu] = useState(null);
   const megaMenuRef = useRef(null);

   const handleOutsideClick = (e) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
         setSelectedMenu(null);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
      };
   }, []);

   return (
      <div>
         <div style={{ width: "100%", padding: "10px", textAlign: "center", background: "#0e234c", color: "white", fontWeight: 100, fontSize: "14px" }}>
            <span>This is a global announcement!</span>
            <span style={{ float: 'right' }}>X</span>
         </div>
         <div style={{ padding: "1rem 2rem", display: "flex", alignItems: "center", flexWrap: "nowrap", backgroundColor: "white" }}>
            <p style={{ fontSize: "2rem" }}>LOGO</p>
            <MainMenuItem isMobile={isMobile} setSelectedMenu={setSelectedMenu} />
         </div>
         {selectedMenu && (
            <div ref={megaMenuRef}>
               <MegaMenu subMenu={selectedMenu.subMenu} titleName={selectedMenu.name} />
            </div>
         )}
      </div>
   );
};

export default DesktopHeaderContainer;
