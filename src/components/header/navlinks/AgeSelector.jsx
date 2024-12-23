'use client'

import React, { useState } from 'react';
import style from './navlinks.module.css';

const ageData = [
   { icon: 'Circle', text: '0-12 weeks' },
   { icon: 'Double', text: '3-4 mos' },
   { icon: 'Square', text: '5-6 mos' },
   { icon: 'Flower', text: '7-8 mos' },
   { icon: 'Segments', text: '9-10 mos' },
   { icon: 'Box', text: '11-12 mos' },
];

const AgeSelector = () => {
   const [activeTab, setActiveTab] = useState('Year 1');

   return (
      <div className={style.ageSelector}>
         <div className={style.tabs}>
            {['Year 1', 'Year 2'].map((tab) => (
               <div
                  key={tab}
                  className={`${style.tab} ${activeTab === tab ? style.active : ''}`}
                  onClick={() => setActiveTab(tab)}
               >
                  {tab}
               </div>
            ))}
         </div>
         <div className={style.grid}>
            {ageData.map(({ icon, text }) => (
               <div key={text} className={style.ageItem}>
                  <div className={style.icon}>
                     <div className={style[`icon${icon}`]}></div>
                  </div>
                  <span className={style.ageText}>{text}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default AgeSelector;

