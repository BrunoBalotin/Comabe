import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Contato from '../pages/Contato'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'

import { AnimatePresence } from 'framer-motion'
import QuemSomos from '../pages/QuemSomos'
import BusinessScan from '../pages/BusinessScan'
import Solucoes from '../pages/Solucoes'
import Revendas from '../pages/Revendas'
import Digitalizacao2 from '../pages/Digitalizacao copy'
import { MetodoDeGestao } from '../pages/blog/MetodoDeGestao'
import { Paperless } from '../pages/blog/Paperless'

function AnimationRoutes() {

    
    const location = useLocation()
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='/quem-somos' element={<QuemSomos/>} />
        <Route path='/business-scan' element={<BusinessScan/>} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/solu%C3%A7%C3%B5es' element={<Solucoes/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/revendas' element={<Revendas/>} />
        <Route path='/digitaliza%C3%A7%C3%A3o'  element={<Digitalizacao2/>} />

        <Route path='/blog/um-metodo-de-gestao-empresarial-para-ganhar-tempo' element={<MetodoDeGestao/>} />
        <Route path='/blog/paperless-a-cultura-de-eficiencia' element={<Paperless/>} />

        

    </Routes>
    </AnimatePresence>
  )
}

export default AnimationRoutes