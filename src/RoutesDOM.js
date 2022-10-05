import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AnimationRoutes from './components/AnimationRoutes'
import { WhatsappButton } from './components/WhatsappButton'
import { Context } from './contexts/MainContext'



function RoutesDOM()  {
   
  

  return (

    <BrowserRouter>
    <ChakraProvider>
    <Context>
    <AnimationRoutes />
    </Context>
    <WhatsappButton />
    </ChakraProvider>
    </BrowserRouter>
 
    
  )
}

export default RoutesDOM