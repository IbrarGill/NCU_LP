import React from 'react';
import './headercontent.css';
import card1 from '../../../assets_landingPage/card1.png';
import card2 from '../../../assets_landingPage/card2.png';
import card3 from '../../../assets_landingPage/card3.png';
import card4 from '../../../assets_landingPage/card4.png';


function HeaderContent() {
  return (
   
      
   
    <div className='row container'>
      <div className='col-6 px-5 py-5 '>
        <div className="d-flex flex-column  mb-3">
          <span className="p-2 text-white fw-bold">Welcome to the Launchpad! </span>
          <span className="p-2 text-white fw-bold fs-1">Bring reality<br/> to your dreams.</span>
          <span className="p-2 text-white fw-bold">Explore the world of NFT through the eyes of <br /> technology.See the latest and best collections<br /> from the finest makers.</span>
          <div className="d-flex flex-row justity-content-center py-5">
          <div className='px-2'>  <button className="button1 text-white fw-bold">Get Started</button></div> 
          <div className='px-2'> <button className="button2 text-black fw-bold">How it works</button></div> 
          </div>
        </div>
      </div>
      <div className='col-6 px-5 py-5' >
        <div className="d-flex flex-row  px-5   mb-2">
          <div className="p-2  py-5">
            <div className="d-flex flex-column justify-content-around  mb-2">
              <div></div>
              <img  src={card1} alt='card1' width={140} height={160}/>
              <div className='py-2'></div>
              <img src={card2} alt='card1'width={140} height={160} />
            </div>
          </div>

          <div className="p-2  px-5  py-5">
            <div className="d-flex flex-column mb-2">
              <img src={card3} alt='card1' width={140} height={160}/>
              <div className='py-2'></div>
              <img src={card4} alt='card1' width={140} height={160}/>
            </div>
          </div>
        </div>
      </div>
    </div>

     
  )
}

export default HeaderContent