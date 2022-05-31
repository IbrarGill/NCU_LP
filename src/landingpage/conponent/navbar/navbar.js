import React from 'react';
import './navbar.css';
import avator from '../../../assets_landingPage/avator.svg';
import logo from '../../../assets_landingPage/logo.svg';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark py-3">
                <div className="container">

                    <div className="navbar-brand d-flex flex-row justify-content-center mb-2">

                        <img className='mx-4' src={logo} alt="applogo" height="50px" width='100px' />
                    </div>
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav">

                            <li className="nav-item"  >
                                <a className="nav-link text-white  px-4" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  px-4" href="/">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  px-4" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  px-4" href="/">Activity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  px-4" href="/">Wallet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  px-4" href="/">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white  px-4" href="/">Contact</a>
                            </li>
                        </ul>
                        <ul
                            className="navbar-nav ms-auto"
                        >
                            <img className='mx-4' src={avator} alt="applogo" height="60px" width='60px' />
                        </ul>

                    </div>
                </div>
            </nav>




        </>
    )
}

export default NavBar