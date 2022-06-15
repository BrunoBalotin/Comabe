import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
/* import Contato from '../pages/Contato' */
import Home from '../pages/Home'
/* import Produtos from '../pages/Produtos' */

import { AnimatePresence } from 'framer-motion'
/* import QuemSomos from '../pages/QuemSomos'
import BusinessScan from '../pages/BusinessScan'
import Solucoes from '../pages/Solucoes'
import TrabalheConosco from '../pages/TrabalheConosco'
import Revendas from '../pages/Revendas'
*/ 

function AnimationRoutes() {

    
    const location = useLocation()
  return (
      <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
       {/*  <Route path='/Quem-Somos' element={<QuemSomos/>} />
        <Route path='/Business-Scan' element={<BusinessScan/>} />
        <Route path='/Produtos' element={<Produtos/>} />
        <Route path='/Solucoes' element={<Solucoes/>} />
        <Route path='/Contato' element={<Contato/>} />
        <Route path='/Trabalhe-Conosco' element={<TrabalheConosco/>} />
        <Route path='/Revendas' element={<Revendas/>} />

      */ }
        

    </Routes>
    </AnimatePresence>
  )
}

export default AnimationRoutes