import React from 'react';
import rocket from '../../../assets_landingPage/rocket.png';
import settings from '../../../assets_landingPage/settings.png';
import hub from '../../../assets_landingPage/hub.png';
import './detailcard.css';
function DetailsCard() {
    return (
        <div className='py-5 container'>


            <div className="grid-container-cards py-5 mx-5">
                <div className='rid-item-card  border-end border-bottom border-3 '>
                    <div className="m-3 cards">
                        <img src={hub} alt='hub' />
                        <div className='fw-bold fs-6 my-2  ' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                        <div className='my-2 ' style={{ color: '#022A7D' }}>Access your accounts activity and
                            transactions from here. You can
                            also control the collections that are
                            under your influence.</div>
                    </div>


                </div>
                <div className="rid-item-card  border-end border-bottom border-3">
                    <div className="m-3 cards">
                        <img src={rocket} alt='hub' />
                        <div className='fw-bold fs-6 my-2' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                        <span className='my-2 ' style={{ color: '#022A7D' }}>Access your accounts activity and
                            transactions from here. You can
                            also control the collections that are
                            under your influence.</span>
                    </div>

                </div>
                <div className="rid-item-card  border-bottom border-3">
                    <div className="m-3 cards">
                        <img src={settings} alt='hub' />
                        <div className='fw-bold fs-6 my-2' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                        <span className='my-2 ' style={{ color: '#022A7D' }}>Access your accounts activity and
                            transactions from here. You can
                            also control the collections that are
                            under your influence.</span>

                    </div>

                </div>
                <div className="rid-item-card  border-end  border-3">
                    <div className="m-3 cards">
                        <img src={hub} alt='hub' />
                        <div className='fw-bold fs-6 my-2' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                        <span className='my-2 ' style={{ color: '#022A7D' }}>Access your accounts activity and
                            transactions from here. You can
                            also control the collections that are
                            under your influence.</span>

                    </div>


                </div>
                <div className="rid-item-card  border-end border-3">
                    <div className="m-3 cards">
                        <img src={rocket} alt='hub' />
                        <div className='fw-bold fs-6 my-2' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                        <span className='my-2 ' style={{ color: '#022A7D' }}>Access your accounts activity and
                            transactions from here. You can
                            also control the collections that are
                            under your influence.</span>
                    </div>

                </div>
                <div className="rid-item-card ">
                    <div className="m-3 cards">
                        <img src={settings} alt='hub' />
                        <div className='fw-bold fs-6 my-2' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                        <span className='my-2 '  style={{ color: '#022A7D' }}>Access your accounts activity and
                            transactions from here. You can
                            also control the collections that are
                            under your influence.</span>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default DetailsCard