import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AnimationRoutes from './components/AnimationRoutes'
import { Context } from './contexts/MainContext'


const breakpoints = {
  sm: '320px',
  md: '640px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1536px',
}

const theme = extendTheme({
  breakpoints
})



function RoutesDOM()  {
   
  

  return (

    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <Context>
    <AnimationRoutes />
    </Context>
    </ChakraProvider>
    </BrowserRouter>
 
    
  )
}

export default RoutesDOM