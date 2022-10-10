import React, { useEffect } from 'react'
import {ReactComponent as Mouse} from '../images/mouse.svg'
import {motion} from "framer-motion"
import Filtro from '../components/Filtro'
import Tarja from '../components/Tarja'
import Navbar from '../components/Navbar'
import Utilities from '../components/Utilities'
import Footer from '../components/Footer'
import { WhatsappButton } from '../components/WhatsappButton'

const Produtos= () => {

  const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }, 200)
}

useEffect(() => {
  if (document.location.hash === '#rotulador') {
    setTimeout(() => {
      document.querySelector("#rotulador").scrollIntoView( { behavior: "smooth", block: "start"})
    }, 500)
  } else if (document.location.hash === '#impressora') {
    setTimeout(() => {
      document.querySelector("#impressora").scrollIntoView( { behavior: "smooth", block: "start"})
    }, 500)
  } else if (document.location.hash === '#multifuncional') {
    setTimeout(() => {
      document.querySelector("#multifuncional").scrollIntoView( { behavior: "smooth", block: "start"})
    }, 500)
  } else if (document.location.hash === '#scanner') {
    setTimeout(() => {
      document.querySelector("#scanner").scrollIntoView( { behavior: "smooth", block: "start"})
    }, 500)
  } else if (document.location.hash === '#suprimento') {
    setTimeout(() => {
      document.querySelector("#suprimento").scrollIntoView( { behavior: "smooth", block: "start"})
    }, 500)
  }
}, [])


  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.8} }} exit={{opacity: 0, transition: {duration: 0.1} }} >
      <Navbar />
      <div className='bg-hero-bg-produtos w-full py-40 flex items-center relative'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-3xl text-white font-medium mb-[30px]'>Nossos Produtos</h1>
          <p className='text-white text-sm font-light lg:w-[50%] 2xl:w-[32%]'>Temos uma linha completa de produtos e soluções para todos os ambientes de impressão, contamos com as melhores marcas e equipamentos do mercado, Epson, Kyocera, Brother, Xerox e Katun</p>

        </div>

      </div>
      <Mouse className='absolute hidden sm:block -bottom-11 lg:-bottom-8 2xl:-bottom-8 left-1/2 -translate-x-1/2' />
      </div>

<div id="impressora">
      <Filtro /></div>
      <div>
      <Tarja 
      Background='bg-bg-tarja-produtos' 
      Text='Podemos te ajudar! Entre em contato com a nossa equipe e confira as melhores soluções!' 
      Title='Procura por algum equipamento específico? ' 
      ButtonText='Fazer cotação' 
      link='/contato'
      onClick={scrollToTop}
      />
    </div>
    <Utilities />
    <Footer />
    <WhatsappButton />
    </motion.div>
  )
}

export default Produtos