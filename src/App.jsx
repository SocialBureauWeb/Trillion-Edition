import { useState } from 'react'
import Header from './components/Header'
import Section1 from './components/Section1'
import BureauSection from './components/BureauSection'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
function App() {
  return (
    <>
    <div>
      <Header/>
      <Section1/>
      <BureauSection/>
      <Section2/>
      <Section3/>
    </div>
      </>
  )
}
export default App
