import React from 'react';
import './headercontent.css';
import card1 from '../../../assets_landingPage/card1.png';
import card2 from '../../../assets_landingPage/card2.png';
import card3 from '../../../assets_landingPage/card3.png';
import card4 from '../../../assets_landingPage/card4.png';


function HeaderContent() {
  return (



    <div className='row'>
      <div className='col-lg-6 col-md-6 px-5 py-5 '>
        <div className="d-flex flex-column  mb-3">
          <span className="p-2 text-white fw-bold">Welcome to the Launchpad! </span>
          <span className="p-2 text-white fw-bold fs-1">Bring reality<br /> to your dreams.</span>
          <span className="p-2 text-white fw-bold">Explore the world of NFT through the eyes of <br /> technology.See the latest and best collections<br /> from the finest makers.</span>
          <div className="d-flex flex-row justity-content-center py-5">
            <div className='px-2'>  <button className="button1 text-white fw-bold">Get Started</button></div>
            <div className='px-2'> <button className="button2 text-black fw-bold">How it works</button></div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 col-md-6 py-5 px-5'>

        <div className='row'>

          <div className='col-lg-6'>
            <img className=' colo-6 col-md-4 m-2 img-fluid' src={card1} alt='card1' width={150} height={160} />
            <img className='colo-6 col-md-4 m-2 img-fluid' src={card2} alt='card1' width={150} height={160} />
            <img className='colo-6 col-md-4 m-2 img-fluid' src={card3} alt='card1' width={150} height={160} />
            <img className='colo-6 col-md-4 m-2 img-fluid' src={card4} alt='card1' width={150} height={160} />
          </div>
          <div className='col-lg-6  '>

          </div>


        </div>


      </div>
    </div>


  )
}

export default HeaderContent