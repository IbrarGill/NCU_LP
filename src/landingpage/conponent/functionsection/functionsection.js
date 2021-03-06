import React from 'react';
import functionicon from '../../../assets_landingPage/functionicon.png';
import './functionsection.css';
function FunctionSection() {
  return (
    <div className='functionbottombg'>


      <div className='py-5'>
        <div className='d-flex justify-content-center text-white fw-bold fs-3 text-center'>
          Endless Functions
        </div>
        <div className='d-flex justify-content-center text-white  fs-6 text-center'>
          Access your accounts activity and transactions from here. You can <br />also control the collections that are under your influence.
        </div>
        <center>
          <img src={functionicon} className="img-fluid" alt='functionicons' width={881} height={594} />
        </center>
      </div>

    </div>
  )
}

export default FunctionSection