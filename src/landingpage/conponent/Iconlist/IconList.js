import React from 'react';
import icon1 from '../../../assets_landingPage/icon1.png';
import icon2 from '../../../assets_landingPage/icon2.png';
import icon3 from '../../../assets_landingPage/icon3.png';
import icon4 from '../../../assets_landingPage/icon4.png';
import icon5 from '../../../assets_landingPage/icon5.png';
import './iconlist.css';


function IconList() {
  return (
    <div className='py-4'>
        <div className='d-flex flex-row justify-content-between'>
            <img className='px-3'  src={icon1} alt='icon1'/>
            <img className='px-3'  src={icon2} alt='icon2'/>
            <img className='px-3'  src={icon3} alt='icon3'/>
            <img className='px-3'  src={icon4} alt='icon4'/>
            <img className='px-3'  src={icon5} alt='icon5'/>
        </div>
    </div>
  )
}

export default IconList