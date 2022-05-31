import React from 'react';
import rocket from '../../../assets_landingPage/rocket.png';
import settings from '../../../assets_landingPage/settings.png';
import hub from '../../../assets_landingPage/hub.png';

function DetailsCard() {
    return (
        <div className='py-5'>
            <div className='d-flex justify-content-center'>
                <div className='col-3 px-5 border-end border-bottom py-5 border-3 border-#508CD3'>
                    <img src={hub} alt='hub' />
                    <div className='fw-bold fs-4 ' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                    <span  style={{ color: '#022A7D' }}>Access your accounts activity and
                        transactions from here. You can
                        also control the collections that are
                        under your influence.</span>
                </div>
                <div className='col-3 px-5 border-end  border-bottom border-3 py-5 border-#508CD3'>
                    <img src={rocket} alt='hub' />
                    <div className='fw-bold fs-4' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                    <span  style={{ color: '#022A7D' }}>Access your accounts activity and
                        transactions from here. You can
                        also control the collections that are
                        under your influence.</span>
                </div>
                <div className='col-3 px-5  border-bottom border-3 py-5 border-#508CD3'>
                    <img src={settings} alt='hub' />
                    <div className='fw-bold fs-4' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                    <span  style={{ color: '#022A7D' }}>Access your accounts activity and
                        transactions from here. You can
                        also control the collections that are
                        under your influence.</span>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <div className='col-3 px-5 border-end py-5 border-3 border-#508CD3'>
                    <img src={hub} alt='hub' />
                    <div className='fw-bold fs-4' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                    <span  style={{ color: '#022A7D' }}>Access your accounts activity and
                        transactions from here. You can
                        also control the collections that are
                        under your influence.</span>
                </div>
                <div className='col-3 px-5 border-end py-5 border-3 border-#508CD3'>
                    <img src={rocket} alt='hub' />
                    <div className='fw-bold fs-4' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                    <span  style={{ color: '#022A7D' }}>Access your accounts activity and
                        transactions from here. You can
                        also control the collections that are
                        under your influence.</span>
                </div>
                <div className='col-3 px-5 py-5'>
                    <img src={settings} alt='hub' />
                    <div className='fw-bold fs-4' style={{ color: '#022A7D' }}>Design your User Profile to fit your style. </div>
                    <span  style={{ color: '#022A7D' }}>Access your accounts activity and
                        transactions from here. You can
                        also control the collections that are
                        under your influence.</span>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard