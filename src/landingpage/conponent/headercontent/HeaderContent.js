import React from 'react';
import './headercontent.css';
import card1 from '../../../assets_landingPage/card1.png';
import card2 from '../../../assets_landingPage/card2.png';
import card3 from '../../../assets_landingPage/card3.png';
import card4 from '../../../assets_landingPage/card4.png';



function HeaderContent() {
  return (



    <div className='container' >

{/* <div className="flex-container">
   <div className="flex-items ">
   <div className="d-flex flex-column  mb-3">
            <span className="p-2 text-white fw-bold">Welcome to the Launchpad! </span>
            <span className="p-2 text-white fw-bold fs-1">Bring reality<br /> to your dreams.</span>
            <span className="p-2 text-white fw-bold">Explore the world of NFT through the eyes of <br /> technology.See the latest and best collections<br /> from the finest makers.</span>
            <div className="d-flex flex-row justity-content-center py-5">
              <div className='px-2'>
                  <button className='fw-bold my-2 button1  text-white'>Get Started</button>
                  </div>
              <div className='px-2'>
              <button className='fw-bold my-2 button2  text-black'>How it works</button>
              
                 </div>
            </div>
          </div>
   </div>
   <div className="flex-items">

   <div className="grid-container-image">
            <div className="grid-item-image m-3">
            <img className='  img-fluid Imageshadow ' src={card1} alt='card1' width={150} height={160} />
            </div>
            <div className="grid-item-image m-3">
            <img className=' img-fluid Imageshadow' src={card2} alt='card1' width={150} height={160} />
            </div>
            <div className="grid-item-image m-3">
            <img className=' img-fluid Imageshadow' src={card3} alt='card1' width={150} height={160} />
            </div>
            <div className="grid-item-image m-3">
            <img className=' img-fluid Imageshadow' src={card4} alt='card1' width={150} height={160} />
            </div>
          </div>
   </div>
</div> */}

      <div className="grid-container-header mx-5 py-5">
        <div className="grid-item-header ">
          <div className="d-flex flex-column  mb-3">
            <div className="p-2 text-white fw-bold">Welcome to the Launchpad! </div>
            <div className="p-2 text-white fw-bold fs-1">Bring reality<br /> to your dreams.</div>
            <div className="p-2 text-white fw-bold">Explore the world of NFT through the eyes of  technology. See the latest and best collections from the finest makers.</div>
            <div className="d-flex flex-row justity-content-center py-5">
              <div className='px-2'>  <button className="button1   text-white fw-bold">Get Started</button></div>
              <div className='px-2'> <button className="button2   text-black fw-bold">How it works</button></div>
            </div>
          </div>
        </div>
        <div className="grid-item-header"></div>
        <div className="grid-item-header">

       
          <div className="grid-container-image">
            <div className="grid-item-image m-3">
            <img className='  img-fluid Imageshadow ' src={card1} alt='card1' width={150} height={160} />
            </div>
            <div className="grid-item-image m-3">
            <img className=' img-fluid Imageshadow' src={card2} alt='card1' width={150} height={160} />
            </div>
            <div className="grid-item-image m-3">
            <img className=' img-fluid Imageshadow' src={card3} alt='card1' width={150} height={160} />
            </div>
            <div className="grid-item-image m-3">
            <img className=' img-fluid Imageshadow' src={card4} alt='card1' width={150} height={160} />
            </div>
          </div>

         


        </div>
      </div>

 

    </div>


  )
}

export default HeaderContent