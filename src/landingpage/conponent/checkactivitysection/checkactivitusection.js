import React from 'react';
import getstartedchart from '../../../assets_landingPage/getstartedchart.png';
import './checkactivitysection.css'
function CheckActivitySection() {
  return (
    <div className='row py-5'>
        <div className='col-2'></div>
        <div className='col-10 py-5'>
            <div className='row py-5'>
            <div className='col-lg-6 col-md-6 ' >
                <div className='text-white fw-bold fs-3'>Are you want to create smart contract without coding?</div>
                <div className='text-white'>Access your accounts activity and transactions from here. You can also control the collections that are under your influence. Access your accounts activity and transactions from here. You can also control the collections that are under your influence.</div>
                <div className='d-flex flex-row justify-content-start py-3 '>
                    <button className='fw-bold text-center text-white rounded-3 border-0 bg-primary shadow-lg py-2 px-2 '>How it works</button>
                    <button className='fw-bold text-center text-black rounded-3 border-0 py-2 px-2 bg-white shadow-lg mx-3'>Check activity</button>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 px-4'>
               
                <img className='img-fluid center' src={getstartedchart} alt='' width={220} height={220}/>
             
                
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default CheckActivitySection