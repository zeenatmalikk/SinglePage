import React from 'react'
import BusinessCards from './BusinessCards/BusinessCards'
import Footer from './Footer/Footer'
import LandingScreen from './LandingScreen/LandingScreen'
import MobileC from './MobileCarousels/MobileC'
import Newsletter from './Newsletter/Newsletter'
import PurposeBanner from './PurposeBanner/PurposeBanner'
import Schedule from './Schedule/Schedule'
import Services from './Services/Services'

const Home = () => {
  return (
    <div>
         <LandingScreen/>
     <PurposeBanner/>
     <BusinessCards/>
     <Schedule/>
     <MobileC/>
     <Services/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default Home