import React from 'react'
import {motion} from "framer-motion"

import {ReactComponent as Whatsapp} from '../images/Contato/whatsapp.svg'
import {ReactComponent as Phone} from '../images/Contato/phone.svg'
import {ReactComponent as Mail} from '../images/Contato/mail.svg'
import {ReactComponent as Pin} from '../images/Contato/pin.svg'
import {ReactComponent as ArrowRight} from '../images/Contato/arrowright.svg'


import {ReactComponent as Mouse} from '../images/mouse.svg'
import ReactForm from '../components/ReactForm'
import Navbar from '../components/Navbar'
import Utilities from '../components/Utilities'
import Footer from '../components/Footer'
import { WhatsappButton } from '../components/WhatsappButton'

const locations = [
  
  {
    "id": 1,
    "image": 'https://uploaddeimagens.com.br/images/003/903/155/full/Ret%C3%A2ngulo_643.png?1655202994',
    "name": 'Serra gaúcha/Matriz',
    "adress": 'Rua Três de Outubro, 120 Cidade Alta, Bento Gonçalves - RS +55 54 2621.2300',
    "buttonLink": 'tel:555426212300',
  },

  {
    "id": 2,
    "image": 'https://uploaddeimagens.com.br/images/003/903/156/full/Grupo_3026.png?1655203035',
    "name": 'Feevale techpark',
    "adress": 'Alameda da Inovação, 270 Campo Bom - RS +55 51 3396.2300',
    "buttonLink": 'tel:555133962300',
  },

  {
    "id": 3,
    "image": 'https://uploaddeimagens.com.br/images/003/903/157/full/Ret%C3%A2ngulo_647.png?1655203053',
    "name": 'Santa catarina',
    "adress": 'Rua Coronel João Fernandes, 195 Passo de Torres - SC +55 54 2621.2352',
    "buttonLink": 'tel:555426212352',
  },


]

const Contato = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.8} }} exit={{opacity: 0, transition: {duration: 0.1} }}>
    <Navbar />
    <div className="bg-hero-bg-contato w-full py-36 flex items-center relative">
      <div className='container mx-auto relative'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-[50%]'>
          <span className='flex w-max bg-[#0088FF] py-2 px-5 text-white text-sm font-medium rounded-3xl'>ENTRE EM CONTATO</span>
          <h1 className='text-2xl lg:text-4xl text-white font-medium mt-[20px]'>Temos uma equipe especializada para atendê-lo da melhor maneira possível</h1>
          <h3 className='text-xl text-white font-medium mt-[40px] mb-[30px]'>Nossos canais de atendimento</h3>
          <div className='flex flex-col gap-3'>
          <span className='font-light text-white text-sm flex items-center gap-3'><Whatsapp />+55 54 2621.2300</span>
          <span className='font-light text-white text-sm flex items-center gap-3'><Phone />+55 54 2621.2300</span>
          <span className='font-light text-white text-sm flex items-center gap-3'><Mail />comabe@comabe.com.br</span>
          </div>
          </div>

          <div className='lg:absolute right-0 mt-10 lg:mt-0'>
            <ReactForm fullWidth="w-full"/>
          </div>

        </div>
      </div>
      <Mouse className='absolute hidden sm:block -bottom-11 lg:-bottom-9 2xl:-bottom-8 left-1/2 -translate-x-1/2' />
    </div>

    <div className='flex items-center h-[500px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
          <div>
            <h2 className='text-3xl text-[#343434] font-medium w-[70%]'>Estamos prontos para te atender</h2>
          </div>

          <div className='lg:w-[60%] mt-10 lg:mt-0'>
            <p className='text-sm text-[#575757] font-light'>A equipe da Comabe está à disposição para atender você, seja para falar mais sobre como otimizar seu ambiente de trabalho, conversar sobre o seu plano atual, saber mais sobre a empresa ou dar a sua opinião sobre os nossos serviços. Para isso, é só preencher o formulário que em breve retornaremos.</p>
          </div>
        </div>
      </div>

    </div>

    <div className='flex items-center py-28 bg-[#F8F8FA]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center'>
          <div>
            <h2 className='text-3xl text-[#343434] font-medium'>Aonde estamos fisicamente</h2>
          </div>

          <div>
          <span className='text-white bg-[#FF8800] flex items-center p-2 pl-[20px] pr-[20px] rounded-full text-sm font-medium gap-[10px]'><Pin /> Visite-nós</span>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between mt-[60px]'>
          

          {locations.map((locations) => (
          <div className='w-full lg:w-[32%] 2xl:w-[435px] 2xl:h-[520px] bg-white rounded-xl' key={locations.id}>
          <div><img src={locations.image} alt='foto da cidade' /> </div>
          <div className='py-[50px] pl-[50px]'>
            <h3 className='text-xl text-[#343434] font-medium mb-[20px]'>{locations.name}</h3> 
            <p className='text-sm text-[#575757] font-light w-[85%] mb-[40px]'>{locations.adress}</p>
            <a className='flex text-sm text-[#0F5197] font-medium items-center gap-[10px] w-max' href={locations.buttonLink}>Ligar <ArrowRight className='mt-[5px]'/></a>
          </div>
          </div>
          ))}
        </div>


      </div>
    </div>

    {/* <div className='flex items-center py-36' id='equipe'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <div className='w-full lg:w-[40%]'>
              <span className='flex w-max bg-[#0088FF] py-2 px-5 text-white text-sm font-medium rounded-3xl'>CARREIRA</span>
              <h2 className='text-3xl text-[#343434] font-medium mb-[30px] mt-[20px]'>Conheça nossa equipe</h2>
              <p className='text-sm text-[#575757] font-light'>A Comabe tem como diferencial a preocupação com a qualidade e a eficiência dos produtos que comercializa, bem como com o atendimento prestado. Sendo assim, a equipe Comabe é especializada e treinada pelas marcas parceiras para oferecer a melhor assistência e atendimento personalizado.</p>
              <h3 className='text-xl text-[#343434] font-medium mt-[40px] mb-[20px]'>O que acha de fazer parte do grupo Comabe?</h3>
              <p className='text-sm text-[#575757] font-light mb-[40px] w-[80%]'>Interessados  preencher os dados do formulário através do botão abaixo</p>
              <ButtonPrimary text='Quero fazer parte' color='ButtonPrimary' linkRef=''/>
              </div>

              <div>
                <img src='https://uploaddeimagens.com.br/images/003/903/171/full/Grupo_3027.png?1655204754' alt='' />
              </div>
            </div>

            */}

           {/*  <div className='mt-[150px]'>
              <h2 className='text-3xl text-[#343434] font-medium mb-[50px] mt-[20px]'>Nossas divisões</h2>
              <div className='flex flex-wrap gap-2 lg:gap-0 justify-between'>
                <div className='flex flex-col items-center justify-center w-[48%] lg:w-[24%] 2xl:w-[320px] h-[275px] shadow-shadow-card rounded-xl'>
                    <div><Gestao /></div>
                    <h2 className='text-xl text-[#343434] text-center lg:text-left font-medium mb-[10px] mt-[20px]'>Gestão</h2>
                    <p className='text-center w-[60%] text-sm text-[#575757] font-light'>Conheça mais a nossa história e quem somos</p>
                </div>
                <div className='flex flex-col items-center justify-center w-[48%] lg:w-[24%] 2xl:w-[320px] h-[275px] shadow-shadow-card rounded-xl'>
                <div><Equipe/></div>
                    <h2 className='text-xl text-[#343434] text-center lg:text-left font-medium mb-[10px] mt-[20px]'>Equipe interna</h2>
                    <p className='text-center w-[80%] text-sm text-[#575757] font-light'>Para quem quer tecnologia para sua empresa</p>
                </div>
                <div className='flex flex-col items-center justify-center w-[48%] lg:w-[24%] 2xl:w-[320px] h-[275px] shadow-shadow-card rounded-xl'>
                <div><Assistencia /></div>
                    <h2 className='text-xl text-[#343434] text-center lg:text-left font-medium mb-[10px] mt-[20px]'>Assistência técnica</h2>
                    <p className='text-center w-[80%] text-sm text-[#575757] font-light'>Para quem quer necessita de suporte com equipamentos</p>
                </div>
                <div className='flex flex-col items-center justify-center w-[48%] lg:w-[24%] 2xl:w-[320px] h-[275px] shadow-shadow-card rounded-xl'>
                <div><Consultor /></div>
                    <h2 className='text-xl text-[#343434] text-center lg:text-left font-medium mb-[10px] mt-[20px]'>Consultores externos</h2>
                    <p className='text-center w-[80%] text-sm text-[#575757] font-light'>Fale conosco para saber qual o consultor mais próximo de você</p>
                </div>
              </div>
            </div>

          

        </div>
    </div> */}
    
    
    
    <Utilities />
    <Footer />
    <WhatsappButton />
    </motion.div>
  )
}

export default Contato