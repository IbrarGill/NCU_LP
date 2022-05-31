import React from 'react';
import NavBar from './conponent/navbar/navbar';
import HeaderContent from './conponent/headercontent/HeaderContent';
import IconList from './conponent/Iconlist/IconList';
import GetStarted from './conponent/getstarted/getstarted';
import ContractDetail from './conponent/contract_details/ContractDetail';
import CheckActivitySection from './conponent/checkactivitysection/checkactivitusection';
import FunctionSection from './conponent/functionsection/functionsection';
import FooterSection from './conponent/footer/footer';
import Explore from './conponent/explore/explore';
import DetailsCard from './conponent/details_cards/detailcard';
function LandingPage() {
  return (
    <div>
      <section id="top-bg">
        <NavBar />
        <HeaderContent />
        <div id='iconslist'>  <IconList /> </div>
      </section>
      <section className='py-5'> <GetStarted /></section>
      <section id='contractdetails'> <ContractDetail /> </section>
      
      <section id='checkactivitysec'> <CheckActivitySection /> </section>
      <section><DetailsCard /> </section>
      <section id='bottombg'>
        <FunctionSection />
        <Explore />
        <FooterSection />
      </section>
    </div>
  )
}

export default LandingPage