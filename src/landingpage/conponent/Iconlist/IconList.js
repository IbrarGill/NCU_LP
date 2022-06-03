import React from 'react';
import icon1 from '../../../assets_landingPage/icon1.svg';
import icon2 from '../../../assets_landingPage/icon2.svg';
import icon3 from '../../../assets_landingPage/icon3.svg';
import icon4 from '../../../assets_landingPage/icon4.svg';
import icon5 from '../../../assets_landingPage/icon5.svg';
import './iconlist.css';


function IconList() {
  return (
    <div id='iconslist'>
      <center>
        <div className='row'>
          <img className='col-2  mx-auto my-2 py-auto' src={icon1} alt='icon1' width={30} height={60} />
          <img className='col-2  mx-auto my-2 py-auto' src={icon2} alt='icon2' width={30} height={60} />
          <img className='col-2  mx-auto my-2 py-auto' src={icon3} alt='icon3' width={30} height={60} />
          <img className='col-2  mx-auto my-2 py-auto' src={icon4} alt='icon4' width={30} height={60} />
          <img className='col-2  mx-auto my-2 py-auto' src={icon5} alt='icon5' width={30} height={60} />
        </div>
      </center>

    </div>
  )
}

export default IconList