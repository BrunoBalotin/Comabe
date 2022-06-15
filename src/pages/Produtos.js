import React from 'react'
import {ReactComponent as Mouse} from '../images/mouse.svg'
import {motion} from "framer-motion"
import Filtro from '../components/Filtro'
import Tarja from '../components/Tarja'

const Produtos= () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.8} }} exit={{opacity: 0, transition: {duration: 0.1} }} >
      <div className='bg-hero-bg-produtos w-full h-[640px] flex items-center relative'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-[48px] text-white font-medium mb-[30px]'>Nossos Produtos</h1>
          <p className='text-white text-[18px] font-light w-[32%]'>Temos uma linha completa de produtos e soluções para todos os ambientes de impressão, contamos com as melhores marcas e equipamentos do mercado, Epson, Kyocera, Brother, Xerox e Katun.</p>

        </div>

      </div>
      <Mouse className='absolute -bottom-7 left-1/2 -translate-x-1/2' />
      </div>

      <Filtro />
      <div>
      <Tarja 
      Background='bg-bg-tarja-produtos' 
      Text='Podemos te ajudar! Entre em contato com a nossa equipe e confira as melhores soluções!' 
      Title='Procura por algum equipamento específico? ' 
      ButtonText='Fazer cotação' 
      />
    </div>
    </motion.div>
  )
}

export default Produtos