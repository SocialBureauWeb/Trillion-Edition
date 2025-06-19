import { useState } from 'react'
import Header from './components/Header'
import Section1 from './components/Section1'
import BureauSection from './components/BureauSection'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Media from './components/Media'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Services from './components/Services'
// import ScrollVideo from './components/ScrollVideo'
function App() {
  return (
    <>
      
      <div>
        {/* <ScrollVideo/> */}
      <Header/>
      <BureauSection/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Media/>
      <Subscribe/>
      <Footer/>
    </div>
      </>
  )
}
export default App
