import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Contato from '../pages/Contato'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import { WhatsappButton } from '../components/WhatsappButton'

import { AnimatePresence } from 'framer-motion'
import QuemSomos from '../pages/QuemSomos'
import BusinessScan from '../pages/BusinessScan'
import Solucoes from '../pages/Solucoes'
import Revendas from '../pages/Revendas'
import Digitalizacao from '../pages/Digitalizacao'
import { MetodoDeGestao } from '../pages/blog/MetodoDeGestao'
import { Paperless } from '../pages/blog/Paperless'
import { OrganizaoEmpresarial } from '../pages/blog/OrganizaçãoEmpresarial'
import { Obrigado } from '../pages/Obrigado'
import { ScannerBrother } from '../pages/blog/ScannerBrother'
import { UFS } from '../pages/blog/UFS'
import { OitoCuidados } from '../pages/blog/OitoCuidados'
import Digitalizacao2 from '../pages/Digitalizacao2'
import Digitalizacao3 from '../pages/Digitalizacao3'
import DigitalizacaoTeste from '../pages/DigitalizacaoTeste'
import { ObrigadoTeste } from '../pages/ObrigadoTeste'
import { AberturaDeChamado } from '../pages/AberturaDeChamado'
import { Enviado } from '../pages/Enviado'

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
        <Route path='/digitaliza%C3%A7%C3%A3o'  element={<Digitalizacao/>} />
        <Route path='/digitaliza%C3%A7%C3%A3o$2' exact element={<Digitalizacao2/>} />
        <Route path='/digitaliza%C3%A7%C3%A3o$3' exact element={<Digitalizacao3/>} />
        <Route path='/digitaliza%C3%A7%C3%A3o-teste' exact element={<DigitalizacaoTeste/>} />
        <Route path='/obrigado' element={<Obrigado/>} />
        <Route path='/obrigado-teste' element={<ObrigadoTeste/>} />
        <Route path='/abertura-de-chamado' element={<AberturaDeChamado />} />
        <Route path='/enviado' element={<Enviado />} />

        <Route path='/blog/um-metodo-de-gestao-empresarial-para-ganhar-tempo' element={<MetodoDeGestao/>} />
        <Route path='/blog/paperless-a-cultura-de-eficiencia' element={<Paperless/>} />
        <Route path='/blog/organizacao-empresarial-maior-eficiencia-com-rotuladores' element={<OrganizaoEmpresarial/>} />
        <Route path='/blog/4-vantagens-para-secretaria-escolar' element={<ScannerBrother/>} />
        <Route path='/blog/como-a-ufs-encontrou-documentos-perdidos-atraves-da-digitaliza%C3%A7%C3%A3o' element={<UFS/>} />
        <Route path='/blog/bom-funcionamento-de-sua-impressora' element={<OitoCuidados/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimationRoutes