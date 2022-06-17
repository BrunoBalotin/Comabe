import React, { useState } from 'react'
import {motion} from "framer-motion"

import {ReactComponent as BusinessDocumentos} from '../images/BusinessDocumentos.svg'
import {ReactComponent as BusinessCheck} from '../images/BusinessCheck.svg'
import {ReactComponent as BusinessShield} from '../images/BusinessShield.svg'
import {ReactComponent as BusinessDocument} from '../images/BusinessDocument.svg'
import {ReactComponent as YoutubeIcon} from '../images/YoutubeIcon.svg'
import {ReactComponent as MiniYoutubeIcon} from '../images/MiniYoutubeIcon.svg'
import {ReactComponent as GreenCheck} from '../images/GreenCheck.svg'
import {ReactComponent as BlueDocument} from '../images/BlueDocument.svg'

import {ReactComponent as Pendrive} from '../images/BusinessScan/Icones/Pendrive.svg'
import {ReactComponent as Agility} from '../images/BusinessScan/Icones/Agility.svg'
import {ReactComponent as Suply} from '../images/BusinessScan/Icones/Suply.svg'
import {ReactComponent as Clean} from '../images/BusinessScan/Icones/Clean.svg'
import {ReactComponent as Colaborativo} from '../images/BusinessScan/Icones/Colaborativo.svg'
import {ReactComponent as Security} from '../images/BusinessScan/Icones/Security.svg'
import {ReactComponent as Time} from '../images/BusinessScan/Icones/Time.svg'
import {ReactComponent as CRVA} from '../images/BusinessScan/Icones/CRVA.svg'
import {ReactComponent as Contabilidade} from '../images/BusinessScan/Icones/Contabilidade.svg'
import {ReactComponent as Corporativo} from '../images/BusinessScan/Icones/Corporativo.svg'
import {ReactComponent as Finanças} from '../images/BusinessScan/Icones/Finanças.svg'
import {ReactComponent as Imobiliaria} from '../images/BusinessScan/Icones/Imobiliaria.svg'
import {ReactComponent as Educação} from '../images/BusinessScan/Icones/Educação.svg'
import {ReactComponent as Industria} from '../images/BusinessScan/Icones/Industria.svg'
import {ReactComponent as Saude} from '../images/BusinessScan/Icones/Saude.svg'
import {ReactComponent as Orgão} from '../images/BusinessScan/Icones/Orgão.svg'
import {ReactComponent as Sindicatos} from '../images/BusinessScan/Icones/Sindicatos.svg'
import {ReactComponent as Juridico} from '../images/BusinessScan/Icones/Juridico.svg'


import ThumbYoutube from '../images/YoutubeThumb.png'
import ModalYoutube from '../components/ModalYoutube'
import ButtonPrimary from '../components/ButtonPrimary'
import ICP from '../images/ICP.png'
import Smartphone from '../images/Smartphone.png'
import HomemComCelular from '../images/BusinessScan/HomemComCelular.png'

function BusinessScan() {


  
    


  const [openVideo, setOpenVideo] = useState(0)

  const toggleVideo = () => {
    setOpenVideo(!openVideo)
  } 



  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.8} }} exit={{opacity: 0, transition: {duration: 0.1} }}>
    <div className='bg-hero-bg-business-scan w-full pt-36 lg:py-40 lg:h-[700px] flex items-center'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row items-center justify-between relative h-full'>
          <div>
<<<<<<< HEAD
            <h1 className='text-white text-4xl font-medium mb-[20px]'>Digitalização de documentos</h1>
=======
            <h1 className='text-white text-7xl font-medium mb-[20px]'>Business Scan</h1>
>>>>>>> c7c01f89e681e6675f092be30e3c21306d9d0e4c
            <p className='text-white text-sm font-light w-full lg:w-[45%] leading-8 mb-[50px]'>O Business Scan é o nosso serviço especializado de digitalização de documentos, através dele é possível reduzir o seu armazenamento de documentos em espaço físico com o processo de digitalização inteligente.</p>
            <div className='flex flex-wrap gap-5 lg:gap-0 w-full lg:w-[50%] mb-16 lg:mb-0'>
              <span className='flex items-center w-full lg:w-auto gap-[10px] mr-[50px] text-sm font-medium text-white'><BusinessDocumentos />Documentos salvos em pdf </span>
              <span className='flex items-center w-full lg:w-auto gap-[10px] text-sm font-medium text-white'><BusinessShield />Seguro de fraudes</span>
              <span className='flex items-center w-full lg:w-auto gap-[10px] lg:mt-[30px] text-sm font-medium text-white'><BusinessCheck />Certificação ICP-Brasil:</span>
            </div>
          </div>

          <div className='lg:absolute bg-white right-0 -bottom-[80px] w-full lg:w-[450px] h-[285px] rounded-2xl flex flex-col items-center gap-[30px] justify-center'>
          <BusinessDocument />
          <p className='text-center text-sm text-[#343434] font-light w-[80%]'>Transforme seus documentos impressos em <span className='text-[#0F5197] font-medium'>documentos digitais</span> e tenha acesso a todos os arquivos em poucos cliques.</p>
          </div>
        </div>
      </div>
    </div>

<<<<<<< HEAD
    <div id='outsourcing' className='bg-[#F8F8FA] py-48 flex items-center'>
=======
    <div className='bg-[#F8F8FA] py-48 flex items-center'>
>>>>>>> c7c01f89e681e6675f092be30e3c21306d9d0e4c
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='relative w-full lg:w-[45%] h-[300px] lg:h-[385px]'>
              <img className='w-full h-full absolute grayscale-[30%]' src={ThumbYoutube} alt='' />
              <YoutubeIcon onClick={toggleVideo} className='absolute cursor-pointer left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] hover:scale-125 duration-1000' />
              <div className='absolute bottom-5 left-0 bg-[#1E1E1E] py-3 px-8 opacity-60 cursor-pointer hover:opacity-100'><a target='_blank' href='https://www.youtube.com/watch?v=AzTuyu-zAGI' rel='noreferrer'> <span className='text-white flex items-center gap-[10px]'>Ver no <MiniYoutubeIcon className='mt-[5px]'/> Youtube</span></a></div>
            </div>

            <ModalYoutube video="https://www.youtube.com/embed/AzTuyu-zAGI" onClick={toggleVideo} Close={`${openVideo? 'scale-1' : 'scale-0'}`}/>

            <div className='w-[100%] lg:w-[48%] mt-10 lg:mt-0'>
              <h2 className='text-3xl text-[#343434] font-medium w-90w lg:w-[80%] mb-[40px]'>Reduza seus arquivos em até 96%</h2>
              <p className='text-sm text-[#343434] font-light lg:w-[95%]'>O serviço de digitalização Business Scan é responsável por reduzir os seus arquivos em até 96%, trazendo para sua empresa a facilidade de ter todas as informações de seus arquivos acessíveis e de fácil consulta com a ferramenta de pesquisa personalizada.</p>
              <p className='text-sm text-[#343434] font-light mt-[30px]'>Realize a digitalização de acervo, digitalização de legado, digitalização de arquivos e qualquer outra espécie de documentos através da ferramenta Business Scan.</p>
            </div>
        </div>
      </div>
    </div>

    <div className='flex items-center h-[800px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='w-full lg:w-[45%]'>
            <h2 className='text-2xl text-[#343434] font-medium'>Utilizamos a digitalização de documentos no padrão ICP-Brasil</h2>
<<<<<<< HEAD
            <p className='text-sm text-[#343434] font-light my-[30px]'>ICP-Brasil (Infraestrutura de Chaves Públicas Brasileira) faz com que os documentos ganhem validade jurídica e ainda simplifiquem a vida do usuário com fluxos documentais que auxiliam as empresas a otimizarem os processos de negócios e, ao mesmo tempo, atingir metas de conformidade e armazenamento de longo prazo.</p>
=======
            <p className='text-sm text-[#343434] font-light my-[30px]'>(Infraestrutura de Chaves Públicas Brasileira), o que fazem com que os documentos ganhem validade jurídica e ainda simplifiquem a vida do usuário com fluxos documentais que auxiliam as empresas a otimizarem os processos de negócios e, ao mesmo tempo, atingir metas de conformidade e armazenamento de longo prazo.</p>
>>>>>>> c7c01f89e681e6675f092be30e3c21306d9d0e4c
            <span className='text-sm text-[#343434] font-medium flex items-center gap-[10px]'><BlueDocument /> Realize a digitalização dos diferentes tipos de documentos </span>
            <div className='flex gap-10 lg:gap-0 flex-wrap w-[100%] mt-[40px]'>
              <span className='text-sm text-[#343434] font-medium mr-[50px] flex items-center gap-[10px]'><GreenCheck /> Digitalização de acervo</span>
              <span className='text-sm text-[#343434] font-medium flex items-center gap-[10px]'><GreenCheck /> Digitalização de legado</span>
              <span className='text-sm text-[#343434] font-medium lg:mt-[20px] flex items-center gap-[10px]'><GreenCheck /> Digitalização de arquivos</span>
            </div>
          </div>

          <div>
            <img src={ICP} alt='' />
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center py-36'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-80w lg:w-[40%]'>
              <img src={Smartphone} alt='' />
            </div>

            <div className='w-full lg:w-[58%]'>
              <h2 className='text-2xl lg:text-3xl text-[#343434] font-medium'>Vantagens da digitalização de documentos</h2>
              <p className='text-sm text-[#343434] font-light mt-[30px] mb-[30px]'>Com o Business Scan você gera resultados positivos, através de soluções práticas e seguras, e que além de gerar facilidade na gestão dos fluxos documentais, ajudam a sua empresa no gerenciamento eletrônico documental.</p>
              <div className='flex gap-[10px] lg:gap-[30px] flex-wrap mb-[70px]'>
<<<<<<< HEAD
                <span className='flex flex-col lg:flex-row lg:flex-nowrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Pendrive className='w-[30%]'/> Busca facilitada com arquivos digitais</span>
                <span className='flex flex-col lg:flex-row lg:flex-nwrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Agility className='w-[30%]'/> Agilidade no atendimento</span>
                <span className='flex flex-col lg:flex-row lg:flex-nwrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Suply className='w-[30%]'/> Eliminação de suprimentos</span>
                <span className='flex flex-col lg:flex-row lg:flex-nwrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Clean className='w-[30%]'/> Redução de espaço físicos para acervo</span>
                <span className='flex flex-col lg:flex-row lg:flex-nwrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Colaborativo className='w-[30%]'/>Colaboração</span>
                <span className='flex flex-col lg:flex-row lg:flex-nwrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Security className='w-[30%]'/> Segurança dos dados</span>
                <span className='flex flex-col lg:flex-row lg:flex-nwrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[24%] text-sm font-medium gap-[10px]'><Time className='w-[30%]'/> Otimização de tempo </span>
=======
                <span className='flex flex-col lg:flex-wrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Pendrive className='w-[30%]'/> Busca facilitada com arquivos digitais</span>
                <span className='flex flex-col lg:flex-wrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Agility className='w-[30%]'/> Agilidade no atendimento</span>
                <span className='flex flex-col lg:flex-wrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Suply className='w-[30%]'/> Eliminação de suprimentos</span>
                <span className='flex flex-col lg:flex-wrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Clean className='w-[30%]'/> Redução de espaço físicos para acervo</span>
                <span className='flex flex-col lg:flex-wrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Colaborativo className='w-[30%]'/>Colaboração</span>
                <span className='flex flex-col lg:flex-wrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[30%] text-sm font-medium gap-[10px]'><Security className='w-[30%]'/> Segurança dos dados</span>
                <span className='flex flex-col lg:flex-wrap justify-center lg:justify-start text-center lg:text-left items-center w-[40%] lg:w-[24%] text-sm font-medium gap-[10px]'><Time className='w-[30%]'/> Otimização de tempo </span>
>>>>>>> c7c01f89e681e6675f092be30e3c21306d9d0e4c
              </div>
              <ButtonPrimary text='Agendar visita' color='ButtonPrimary' linkRef='/Contato#header'/>
            </div>
        </div>
      </div>
    </div>

    <div className='flex items-center py-36 bg bg-cover bg-GED' id='gerenciamentoeletronico'>
      <div className='container mx-auto'>
          <div className='w-full lg:w-[38%]'>
          <h2 className='text-white text-2xl lg:text-3xl font-medium mb-[40px]'>Gerenciamento eletrônico de documentos</h2>
          <p className='text-white text-sm font-light'>Em conjunto com a solução business scan, oferecemos para nossos clientes o serviço de GED (gerenciamento eletrônico de documentos) um serviço que garante ao cliente o reconhecimento automático dos documentos que estão sendo digitalizados, capturando no documento os campos e termos que facilitarão a busca ágil posteriormente. </p>
          </div>
      </div>
    </div>

    <div className='flex items-center py-36 bg-[#F8F8FA]'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
<<<<<<< HEAD
        <h2 className='text-3xl text-[#343434] font-medium text-center w-full lg:w-[70%]'>A nossa solução Business Scan pode ser aplicada nos mais diferentes tipos de negócio</h2>
=======
        <h2 className='text-3xl text-[#343434] font-medium text-center w-full lg:w-[70%]'>A nossa solução Business Scan pode ser aplicada nos mais diferentes tipos de negócio.</h2>
>>>>>>> c7c01f89e681e6675f092be30e3c21306d9d0e4c
        </div>
        <div className='flex flex-wrap justify-center mt-[70px] gap-[10px] lg:gap-[25px]'>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><CRVA className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Cartório e CRVA</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Contabilidade className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Contabilidade</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Corporativo className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Corporativo</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Finanças className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Finanças</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Imobiliaria className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium lg:w-[50%] text-center'>Imobiliária e condomínios</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Educação className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Educação</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Industria className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Indústria</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Saude className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Saúde</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Orgão className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium'>Orgão</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Sindicatos className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium lg:w-[50%] text-center'>Sindicatos e associações</h3>
          </div>
          <div className='w-[30%] lg:w-[15%] h-[165px] bg-white rounded-lg flex flex-col items-center pt-[20px] gap-[20px]'>
              <div><Juridico className='h-[60px]'/></div>
              <h3 className='text-sm text-[#343434] font-medium lg:w-[50%] text-center'>Escritórios Jurídicos</h3>
          </div>
          

          </div>
        </div>
    </div>

    <div className='flex items-center py-36'>
       <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div>
            <img src={HomemComCelular} alt='' />
          </div>

          <div className='w-full lg:w-[51%]'>
<<<<<<< HEAD
            <h2 className='text-xl lg:text-3xl text-[#343434] font-medium mt-20 lg:mt-0'>Digitalize seu acervo de documentos, armazene-os de maneira estruturada e localize-os em poucos segundos com alguns cliques</h2>
=======
            <h2 className='text-xl lg:text-3xl text-[#343434] font-medium mt-20 lg:mt-0'>Digitalize seu acervo de documentos, armazene-os de maneira estruturada e localize-os em poucos segundos com alguns cliques. </h2>
>>>>>>> c7c01f89e681e6675f092be30e3c21306d9d0e4c
            <p className='my-[30px] text-sm text-[#343434] font-light'>Você pode eliminar até 80% de documentos impressos do seu escritório com o nosso serviço de business scan.</p>
            <p className='text-sm text-[#343434] font-light mb-[50px]'>Entregamos para sua empresa o melhor serviço de digitalização de documentos do mercado, com agilidade e qualidade necessárias para você não se preocupar com nenhum detalhe.</p>
            <ButtonPrimary text='Solicitar um orçamento' linkRef='/Contato#header' color='ButtonPrimary' />
          </div>
        </div>
       </div>
    </div>
    
    
    
   
    </motion.div>
  )
}

export default BusinessScan