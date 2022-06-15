import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AnimationRoutes from './components/AnimationRoutes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Utilities from './components/Utilities'


function RoutesDOM()  {
   
  

  return (
    <BrowserRouter>
    <Navbar />
    <AnimationRoutes />
    <Utilities />
    <Footer />

    </BrowserRouter>
  )
}

export default RoutesDOM