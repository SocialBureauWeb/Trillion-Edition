import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'

export const Index = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<App />} />
    </Routes>
</BrowserRouter>
    </>
  )
}
