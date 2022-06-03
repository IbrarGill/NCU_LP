import React from 'react';
import getstartedchart from '../../../assets_landingPage/getstartedchart.png';
import './checkactivitysection.css'
function CheckActivitySection() {
    return (
        <div className='container py-5'>
            
            <div className="grid-container-activity py-2">
           
                <div className="grid-activity-item py-5">
                    <div className='text-white fw-bold fs-1'>Do you want to create smart contract without coding?</div>
                    <div className='text-white'>Access your accounts activity and transactions from here. You can also control the collections that are under your influence. Access  your accounts activity and transactions from here. You can also  control the collections that are under your influence.</div>
                    <div className='d-flex flex-row justify-content-start py-3 '>
                        <button className='fw-bold text-center text-white rounded-3 border-0 bg-primary shadow-lg py-2 px-2  my-3  '>How it works</button>
                        <button className='fw-bold text-center text-black rounded-3 border-0 py-2 px-2 bg-white shadow-lg  mx-3 my-3 '>Check activity</button>
                    </div>
                </div>
                <div className="grid-activity-item float-center py-5">
                  
                   <img className='img-fluid float-start' src={getstartedchart} alt='' width={300} height={300} />
                
                   
                </div>

            </div>

        </div>
    )
}

export default CheckActivitySection