import React from 'react';
import icon1 from '../../../assets_landingPage/icon1.svg';
import icon2 from '../../../assets_landingPage/icon2.svg';
import icon3 from '../../../assets_landingPage/icon3.svg';
import icon4 from '../../../assets_landingPage/icon4.svg';
import icon5 from '../../../assets_landingPage/icon5.svg';
import './iconlist.css';


function IconList() {
  return (
    <div className='py-4'>
        <div className='row'>
            <img className='col-lg-2 col-md-2 col-sm-2 mx-3'  src={icon1} alt='icon1' width={15} height={40}/>
            <img className='col-lg-2 col-md-2 col-sm-2 mx-3'  src={icon2} alt='icon2' width={15} height={40}/>
            <img className='col-lg-2 col-md-2 col-sm-2 mx-3'  src={icon3} alt='icon3' width={15} height={40}/>
            <img className='col-lg-2 col-md-2 col-sm-2 mx-3'  src={icon4} alt='icon4' width={15} height={40}/>
            <img className='col-lg-2 col-md-2 col-sm-2 mx-3'  src={icon5} alt='icon5' width={15} height={40}/>
        </div>
    </div>
  )
}

export default IconList