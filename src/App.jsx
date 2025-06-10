import { useState } from 'react'
import Header from './components/Header'
import Section1 from './components/Section1'
import BureauSection from './components/BureauSection'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Media from './components/Media'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <div>
      <Header/>
      <Section1/>
      <BureauSection/>
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
