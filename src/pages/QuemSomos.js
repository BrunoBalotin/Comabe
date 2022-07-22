import React, { useState } from 'react'
import {motion} from "framer-motion"
import {ReactComponent as Mouse} from '../images/mouse.svg'
import {ReactComponent as Check} from '../images/check.svg'

import EpsonLogo from '../images/epsonlogo.png'
import KyoceraLogo from '../images/kyoceralogo.png'
import BrotherLogo from '../images/brotherlogo.png'
import XeroxLogo from '../images/xeroxlogo.png'
import KatunLogo from '../images/katunlogo.png'

import MoneyPeople from '../images/moneypeople.png'
import Impressora from '../images/impressora.png'
import Gotas from '../images/gotas.png'
import ThumbJordano from '../images/thumbjordano.png'



import ButtonPrimary from '../components/ButtonPrimary'
import Sedes from '../components/Sedes'
import Tarja from '../components/Tarja'
import ModalTrabalheConosco from '../components/ModalTrabalheConosco'
import Navbar from '../components/Navbar'
import Utilities from '../components/Utilities'
import Footer from '../components/Footer'

function QuemSomos() {

  const [modalTrabalhe, setModalTrabalhe] = useState('scale-0')

  const toggleTrabalhe = () => {
    setModalTrabalhe(!modalTrabalhe)
  }

  const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }, 200)
}


  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.8} }} exit={{opacity: 0, transition: {duration: 0.1} }}>
    <Navbar />
    <div className="bg-hero-bg-quem-somos w-full h-[500px] sm:h-[490px] md:h-[490px]  lg:h-[490px] bg-cover flex items-center 2xl:h-[720px] relative">
    <div className='container mx-auto'>
      <div>
        <h2 className='text-white w-max py-3 px-6 rounded-3xl text-sm font-medium leading-none mb-[20px] bg-[#0088FF]'>SOBRE NÓS</h2>
        <h1 className='text-white text-4xl font-medium leading-none mb-[20px]'>Mantemos a tradição</h1>
        <p className='text-white text-sm font-light w-[90%] md:w-[561px] leading-relaxed'>Desde 1967 inovando em tecnologia e soluções para ambientes de impressão e digitalização de documentos.</p>
      </div>
    </div>
    <Mouse className='absolute hidden sm:block -bottom-7 left-1/2 -translate-x-1/2' />
    </div>

    <div className='bg-[#F8F8FA]'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='pt-[160px] lg:w-[45%]'>
          <h2 className='text-3xl text-[#343434] font-medium mb-[30px] leading-snug'>Somos especialistas em soluções para impressão e transformação digital de documentos</h2>
          <p className='text-sm font-light text-[#575757] leading-relaxed mb-[40px]'>Fornecemos soluções completas para sua empresa esquecer de vez de se preocupar com impressoras ou documentos impressos. Facilitamos ao máximo a sua experiência com os nossos serviços, para promover a sua empresa a praticidade necessária para você focar em outras áreas do seu negócio.</p>
          <ButtonPrimary onClick={scrollToTop} linkRef="/Contato" text="Agendar Visita" border='border-none' color="ButtonPrimary" />
        </div>
        <div className='bg-[#ECA918] md:w-[100%] md:h-[230px] lg:w-[450px] lg:h-[500px] xl:w-[526px] xl:h-[591px] rounded-2xl sm:rounded-none sm:rounded-t-3xl flex flex-col mt-[20px] pb-[10px] sm:pb-0 pt-[20px] pl-[0px] sm:mt-[30px] md:mt-[50px] lg:mt-[160px] sm:pl-[40px] sm:pt-[30px] md:pt-[50px] lg:pt-[100px]'>
          <span className='text-white text-xl font-medium ml-[17px] mb-[50px]'>Números que nos orgulhamos:</span>
          <div className='flex flex-col sm:flex-col md:flex-row gap-3 lg:block'>
            <div className='flex items-center'>
              <img className='w-[60px] md:w-[70px] lg:w-auto' src={MoneyPeople} alt='icone' />
              <h2 className='text-white font-medium w-full text-xl'>+ de <span className='text-2xl'>15.000</span> Clientes </h2> 
            </div>
            <div className='flex items-center'>
              <img className='w-[60px] md:w-[70px] lg:w-auto' src={Impressora} alt='icone' />
              <h2 className='text-white font-medium w-full text-xl'>+ de <span className='text-2xl'>50.000</span> Equipamentos </h2> 
            </div>
            <div className='flex items-center'>
              <img className='w-[60px] md:w-[70px] lg:w-auto' src={Gotas} alt='icone' />
              <h2 className='text-white font-medium w-full text-xl'>+ de <span className='text-2xl'>1.000.000</span> Suprimentos </h2> 
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className='sm:h-[820px] md:h-[920px] lg:h-[620px] 2xl:h-[820px] flex items-center'>
      <div className='container mx-auto'>
      <div className='flex flex-col md:flex-col lg:flex-row justify-between'>
        <div className='mt-[25px] md:mt-0 w-full md:w-[100%] md:flex justify-center lg:block h-[250px] sm:h-[400px] md:h-[400px] lg:w-[460px] lg:h-[350px] xl:w-[508px] xl:h-[370px] 2xl:w-[608px] 2xl:h-[420px] relative'>
        <iframe className='w-full h-full md:w-[80%] md:h-[100%] lg:w-full lg:h-full absolute object-cover' src="https://www.youtube.com/embed/HF_fFXxA41g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='md:w-full mt-[50px] md:mt-[50px] lg:mt-0 lg:w-[47%]'>
          <h2 className='text-3xl text-[#343434] font-medium mb-[30px]'>Nosso maior desafio</h2>
          <p className='text-sm text-[#343434] font-light mb-[40px]'>Fornecer aos nossos clientes as melhores soluções em equipamentos para impressoras, gestão de documentos físicos e digitais, aluguel de equipamentos de impressão, monitoramento e gerenciamento eletrônico de documentos, e migração digital.</p>

          <span className='text-xl text-[#343434] font-medium flex items-center gap-[15px]'><Check className='w-[22px] md:w-[26px] xl:w-[26px] 2xl:w-auto' /> As melhores soluções pra você</span>
          <p className='text-sm text-[#343434] font-light mt-[30px]'>Somos especialistas em proporcionar a migração digital de documentos dos nossos clientes, soluções completas de gestão de documentos físicos e transformação de materiais impressos em arquivos digitais através do business scan, o processo de digitalização de documentos acessível em poucos cliques.</p>
        </div>
      </div>
      </div>
    </div>

    <div className='flex items-center h-[1350px] md:h-[1270px] lg:h-[1000px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between'>
          <div className='w-full mt-[50px] md:mt-0 md:w-full lg:w-[50%]'>
            <h2 className='text-3xl text-[#343434] font-medium mb-[30px]'>Mais de 50 anos de comprometimento</h2>
            <p className='text-sm text-[#343434] font-light mb-[30px]'>A Comabe, ao longo dos seus 55 anos de atuação, sempre buscou levar mais tecnologia e inovação para a rotina de seus clientes, trazendo mais praticidade e eficiência na gestão das suas atividades.</p>
            <p className='text-sm text-[#343434] font-light mb-[30px]'>Todos os nossos serviços buscam entregar para os nossos clientes soluções completas que visam agilizar os seus processos e facilitar o seu dia a dia na gestão de documentos.</p>
            <p className='text-sm text-[#343434] font-light mb-[40px]'>Contamos com uma equipe qualificada, que está sempre pronta para entregar aos nossos clientes um atendimento personalizado, atendendo empresas das mais variadas áreas e de portes distintos, sempre disponibilizando soluções que visam o aumento de produtividade e eficiência nos processos de impressão.</p>
            <ButtonPrimary onClick={scrollToTop} text='Agendar Visita' linkRef="/Contato" border='border-none' color='ButtonPrimary' />
          </div>
          <div className='relative md:flex justify-center lg:block md:w-full md:h-[600px]  lg:w-[430px] lg:h-[500px] 2xl:w-[501px] 2xl:h-[575px]'>
            <img className='absolute md:w-[80%] md:h-[70%] lg:w-full lg:h-full object-fill' src='https://uploaddeimagens.com.br/images/003/908/865/full/Carlos.png?1655734142' alt='imagem da empresa comabe'/>
            <div className='w-full h-[170px] md:w-[347px] md:h-[200px] bg-white relative z-10 shadow-2xl shadow-[#290000000] rounded-xl mt-[250px] md:mt-[320px] lg:mt-[40px] lg:-left-[50px] pt-[20px] px-[30px]'>
              <div className='flex items-center gap-[20px]'>
                <img src={ThumbJordano} alt='jordano zanesco'/>
                <div className='flex flex-col'>
                <span className='text-sm font-medium text-[#343434]'>Jordano Zanesco</span>
                <span className='text-sm font-light text-[#FF8800]'>CEO da Comabe</span>
                </div>
              </div>
              <p className='text-sm text-[#575757] font-light mt-[25px] w-[90%]'>A Comabe, é uma grande parceira de seus clientes na área de tecnologia</p>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap sm:flex-nowrap items-center mt-10 justify-center gap-7 sm:gap-0 sm:justify-between md:mt-[80px] lg:mt-[220px]'>
           <a className='w-[40%] sm:w-auto' target='_blank' rel="noreferrer" href='https://epson.com.br'><img className='md:w-[80%] lg:w-auto' alt='logo da epson' src={EpsonLogo} /></a> 
           <a className='w-[40%] sm:w-auto' target='_blank' rel="noreferrer" href='https://brazil.kyocera.com'><img className='md:w-[80%] lg:w-auto' alt='logo da kyocera' src={KyoceraLogo} /></a>
           <a className='w-[40%] sm:w-auto' target='_blank' rel="noreferrer" href='https://brother.com.br'><img className='md:w-[80%] lg:w-auto' alt='logo da brother' src={BrotherLogo} /></a>
           <a className='w-[40%] sm:w-auto' target='_blank' rel="noreferrer" href='https://xerox.com'><img className='md:w-[80%] lg:w-auto' alt='logo da xerox' src={XeroxLogo} /></a>
           <a className='w-[40%] sm:w-auto' target='_blank' rel="noreferrer" href='https://katun.com'><img className='md:w-[80%] lg:w-auto object-cover' alt='logo da katun' src={KatunLogo} /></a>
        </div>
      </div>
    </div>

  <div className='bg-[#F8F8FA] py-48 flex items-center mt-20 lg:mt-0'>
    <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-50w 2xl:w-[40%] flex flex-col-reverse lg:flex-col items-end lg:relative -bottom-[30px]'>
            <img src='https://uploaddeimagens.com.br/images/003/908/861/full/Grupo_3158.png?1655733949' className='hidden lg:block absolute left-0 2xl:-left-[100px] -top-[70px]' alt='imagem do ambiente interno de forma pequena' />
            <img src='https://uploaddeimagens.com.br/images/003/908/863/full/Grupo_3159.png?1655734070' alt='imagem do ambiente interno da empresa' />
          </div>

          <div className='w-full lg:w-[40%]'>
            <h2 className='text-3xl font-medium mb-[30px]'>Qualidade e tecnologia no seu negócio</h2>
            <p className='mb-[30px] text-sm font-light'>Conte com as melhores marcas e equipamentos do mercado.</p>
            <p className='mb-[30px] text-sm font-light'>Com a Comabe, você trabalha com as melhores marcas do mercado e ainda tem ganho na produtividade e redução de custos.</p>
            <p className='mb-[50px] text-sm font-light'>Ficou interessado? Então venha conversar com um de nossos consultores e conferir as condições especiais que preparamos para você!</p>
            <ButtonPrimary onClick={scrollToTop} text='Tenho interesse' color='ButtonPrimary' border='border-none' linkRef='/Produtos' />
          </div>
        </div>
    </div>
  </div>
    
    <Sedes />

    <div className='mt-40 sm:mt-0'>
      <Tarja 
      Background='bg-bg-tarja-quemsomos' 
      Text='Interessados enviar currículo para: jordano@comabe.com.br ou preencher os dados do formulário através do botão ao lado' 
      Title='O que acha de fazer parte do grupo Comabe?' 
      ButtonText='Quero fazer parte'
      onClick={toggleTrabalhe}
      />
    </div>

    <ModalTrabalheConosco onClick={toggleTrabalhe} classRef={`${modalTrabalhe ? 'scale-0' : 'scale-1'}`}/>
    
    <Utilities />
    <Footer />
    </motion.div>
  )
}

export default QuemSomos