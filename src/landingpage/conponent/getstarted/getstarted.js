import React from 'react';
import getstarted from '../../../assets_landingPage/getstarted.png';
import './getstarted.css';
function GetStarted() {
    return (
        <div className='row py-5'>
              
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <center>
            <img src={getstarted} alt='getstarted' width={375} height={275}/>
            </center>
           
            </div>
            
            <div className='col-lg-6 col-md-6 col-sm-12 py-5 '>
           
                <div className='d-flex flex-column  mx-3 '>
                    <div className='my-2  fw-bold fs-2 ' style={{color:'#022A7D'}}>Exquisite NFT Art Generator with easy to use instructions.</div>
                    <div className='my-2 fw-bold fs-6 ' style={{color:'#00001E'}}>Create your NFT collection using the state-of-the-art <br/>NFT generator. Personalize the collection to fit your style<br/> and business theme.</div>
                    <div>
                    <button className='my-2 getstartedbtn  text-white'>Get Started</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default GetStarted