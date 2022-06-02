import React from 'react';
import youtube from '../../../assets_landingPage/youtube.svg';
import discord from '../../../assets_landingPage/discord.svg';
import twitter from '../../../assets_landingPage/twiter.svg';
import linkedin from '../../../assets_landingPage/linkedin.svg';
import './footer.css';

function FooterSection() {
  return (
    <div  id='footerbottombg'>
      <div className='row py-5 px-5'>
       
        <div className='col-md-6'>
          <div className='text-white fw-bold fs-3 text-center'>LOGO</div>
          <div className='text-white fw-bold text-center fs-5 '>Want the latest News about Moralis?</div>
          <div className='text-white  fs-6 text-center'>Get access to monthly development updates, exciting new<br /> projects, and much, much more.</div>
          <div className='d-flex flex-row py-5 justify-content-center'>
            <input className='inputfield rounded-3 w-90 px-4 border-0 shadow-0' placeholder='Enter e-mail address' required />
            <button className='fw-bold text-center text-white rounded-3 border-0 bg-primary shadow-lg py-2 px-3 mx-4 '>Subscribe</button>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='text-white fw-bold fs-4 py-2 d-flex justify-content-center'>
            Socials
          </div>
          <div className='d-flex fle-row d-flex justify-content-center py-2'>
            <img src={youtube} alt='youtube' />
            <span className='text-white fw-bold mx-5 '>Youtube</span>
          </div>
          <div className='d-flex fle-row d-flex justify-content-center py-2'>
            <img src={discord} alt='youtube' />
            <span className=' text-white fw-bold mx-5'>Discord</span>
          </div>
          <div className='d-flex fle-row d-flex justify-content-center py-2'>
            <img src={twitter} alt='youtube' />
            <span className='text-white fw-bold mx-5 '>Twitter</span>
          </div>
          <div className='d-flex fle-row d-flex justify-content-center py-2'>
            <img src={linkedin} alt='youtube' />
            <span className='text-white fw-bold mx-5 '>Linkedin</span>
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default FooterSection