import React from 'react';
import getstarted from '../../../assets_landingPage/getstarted.png';
import './getstarted.css';
function GetStarted() {
    return (
        <div className='row py-5'>
              <div className='col-2'></div>
            <div className='col-4'>
            <center>
            <img src={getstarted} alt='getstarted' width={375} height={275}/>
            </center>
           
            </div>
            <div className='col-5 py-6'>
                <div className='d-flex flex-column mx-3 py-5'>
                    <div className='getstarted'>Exquisite NFT Art Generator with easy to use instructions.</div>
                    <div className='getstartedtext'>Create your NFT collection using the state-of-the-art <br/>NFT generator. Personalize the collection to fit your style<br/> and business theme.</div>
                    <button className='getstartedbtn text-white'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted