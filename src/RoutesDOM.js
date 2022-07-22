import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AnimationRoutes from './components/AnimationRoutes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Utilities from './components/Utilities'
import { WhatsappButton } from './components/WhatsappButton'
import { Context } from './contexts/MainContext'


function RoutesDOM()  {
   
  

  return (
    <BrowserRouter>
    <Context>
    <AnimationRoutes />
    </Context>
    <WhatsappButton />
    </BrowserRouter>
    
  )
}

export default RoutesDOM