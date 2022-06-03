import React from 'react';
import './contractdetails.css';
import charts from '../../../assets_landingPage/chart.png';
import laptop from '../../../assets_landingPage/laptop.png';
import fireicon from '../../../assets_landingPage/fireicon.svg';

function ContractDetail() {
    return (
        <div id="contractdetails" className='position-relative'>
            <div className=" position-absolute top-0 start-0">
                <img src={fireicon} alt='fireicon' />
            </div>
            <br />   <br />
            <div className='row py-5 ' >
                <div className='d-flex justify-content-center text-white text-center fw-bold fs-2 center '>
                    Create Highly Optmized Smart <br />
                    Contracts without coding
                </div>
            </div>

            <div className='row'>


                <div className='col-1'></div>
                <div className='col-10'>
                    <div className="grid-container">
                        <div className="grid-item card1 m-3">
                            <div className=' m-2'>
                                <div className='text-white fw-bold py-3 m-3 fs-5'>Browse through the Item Details for your collections.</div>
                                <div className='text-white  py-3 m-3 fs-6'>Here you can view the specifics of the items in the collections and the transaction history alongside other details.
                                    Here you can view the specifics of the items in the collections and the transaction history alongside other details.</div>
                            </div>
                        </div>
                        <div className="grid-item card1 m-3">
                            <div className='m-2'>
                                <div className='text-white fw-bold py-3 m-3 fs-5'>Easy access to exploring projects of the best.</div>
                                <div className='text-white  py-3 m-3 fs-6'>
                                    Witness the top collections of the best artists from all around the world. You can also search for collections concerning transactions, floor price, etc.
                                    Witness the top collections of the best artists from all around the world. You can also search for collections concerning transactions, floor price, etc.
                                </div>
                            </div>
                        </div>
                        <div className="grid-item item-3 card3 m-3">
                            <div className='m-2'>
                                <div className='text-white fw-bold py-3 m-3 fs-5'>Browse through the Item Details for your collections.</div>
                                <div className='text-white  py-3 m-3 fs-6'>Access your accounts activity and
                                    transactions from here. You can
                                    also control the collections that are
                                    under your influence.</div>
                                <center>  <img className='img-fluid m-2' src={charts} alt='charts' width={200} height={300} /></center>

                            </div>
                        </div>
                        <div className="grid-item item-4 card2 m-3">
                            <div className=' my-4 m-2'>

                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 '>
                                        <div className='text-white  fw-bold py-3 px-3 fs-5'>Browse through the Item Details for your collections.</div>
                                        <div className='text-white   py-3 px-3 fs-6'>Monitor the activity on your collections with complete authority and guaranteed security. All the dealings and particulars are entertained here..</div>
                                    </div>
                                    <div className='col-lg-6 col-md-6'>
                                        <center>  <img className='img-fluid m-3' src={laptop} alt='charts' width={200} height={200} /></center>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-1'></div>



          
            </div>
        </div>
    )
}

export default ContractDetail