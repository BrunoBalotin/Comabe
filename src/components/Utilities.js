import React, { useState } from 'react'
import {ReactComponent as Revendedor} from '../images/revendedor.svg'
import {ReactComponent as SuporteTecnico} from '../images/suportetecnico.svg'
import {ReactComponent as TrabalheConosco} from '../images/trabalheconosco.svg'
import {ReactComponent as ArrowUtilities} from '../images/arrowutilities.svg'
import './css/Utilities.css'
import ModalSuporte from './ModalSuporte'
import ModalTrabalheConosco from './ModalTrabalheConosco'
import ModalRevendas from './ModalRevendas'

const Utilities = () => {

  const [modalSuporte, setModalSuporte] = useState('scale-0')
  const [modalTrabalhe, setModalTrabalhe] = useState('scale-0')
  const [modalRevendas, setModalRevendas] = useState('scale-0')

  const toggleSuport = () => {
    setModalSuporte(!modalSuporte)
  }

  const toggleTrabalhe = () => {
    setModalTrabalhe(!modalTrabalhe)
  }

  const toggleRevendas = () => {
    setModalRevendas(!modalRevendas)
  }


  return (
    <div id='utilities'>
    <div  className='bg-gradiente-blue py-16 lg:py-0 lg:h-[323px] flex items-center'>
      <div className='container mx-auto'>
        <div className='w-full flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-[25%]'>
            <h2 className='text-2xl font-medium text-white'>Como nossa equipe pode ajudar você hoje?</h2>
            <p className='text-sm font-light text-white w-[90%] mt-[30px]'>Selecione a opção desejada ao lado, nosso time lhe retornará o mais breve possível.</p>
          </div>

          <div className='flex flex-wrap lg:flex-nowrap justify-between lg:w-[73%] xl:w-[65%] mt-10 lg:mt-0'>
            <div className='border lg:px-2 xl:px-4 2xl:px-6 py-5 rounded-xl w-49w lg:w-[230px] xl:w-32w 2xl:w-[305px]'>
              <h3 className='text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white mb-[20px] flex flex-col text-center h-[100px] w-[95%] lg:w-auto lg:h-auto lg:flex-row lg:text-start items-center gap-3'><Revendedor className='w-[16px] xl:w-[17px] 2xl:w-auto'/> Seja um revendedor</h3>
              <p className='text-[14px] font-light text-white px-4 lg:w-[90%] mb-[35px] text-center lg:text-left'>Clique aqui para tirar suas dúvidas com o time comercial.</p>
              <span onClick={toggleRevendas} className='text-[14px] font-bold text-white flex justify-center lg:justify-start items-center gap-2 cursor-pointer lg:w-max'>Ver mais <ArrowUtilities /></span>
            </div>
            <div className='border lg:px-2 xl:px-4 2xl:px-6 py-5 rounded-xl w-49w lg:w-[230px] xl:w-32w 2xl:w-[305px]'>
              <h3 className='text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white mb-[20px] flex flex-col text-center h-[100px] lg:h-auto lg:flex-row lg:text-start items-center gap-3 px-8 lg:px-0'><SuporteTecnico className='w-[20px] xl:w-[17px] 2xl:w-auto'/> Suporte Técnico</h3>
              <p className='text-[14px] font-light text-white  px-4 lg:w-[90%] mb-[35px] text-center lg:text-left'>Acesse os canais de suporte para falar com nossos especialistas.</p>
              <span onClick={toggleSuport} className='text-[14px] font-bold text-white flex justify-center lg:justify-start items-center gap-2 cursor-pointer lg:w-max'>Ver mais <ArrowUtilities /></span>
            </div>
            <div className='border lg:px-2 xl:px-4 2xl:px-6 py-5 rounded-xl lg:w-[230px] xl:w-32w 2xl:w-[305px] mt-3 lg:mt-0'>
              <h3 className='text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white mb-[20px] flex flex-col text-center h-[100px] lg:h-auto lg:flex-row lg:text-start items-center gap-3'><TrabalheConosco className='w-[16px] xl:w-[17px] 2xl:w-auto'/> Trabalhe Conosco</h3>
              <p className='text-[14px] font-light text-white  px-4 lg:w-[90%] mb-[35px] text-center lg:text-left'>Preencha o formulário, envie o seu currículo e faça parte da equipe.</p>
              <span onClick={toggleTrabalhe} className='text-[14px] font-bold text-white flex justify-center lg:justify-start items-center gap-2 cursor-pointer lg:w-max'>Ver mais <ArrowUtilities /></span>
            </div>
          </div>
        </div>
      </div>

      <ModalSuporte onClick={toggleSuport} classRef={`${modalSuporte ? 'scale-0' : 'scale-1'}`}/>
      <ModalTrabalheConosco onClick={toggleTrabalhe} classRef={`${modalTrabalhe ? 'scale-0' : 'scale-1'}`}/>
      <ModalRevendas onClick={toggleRevendas} classRef={`${modalRevendas ? 'scale-0' : 'scale-1'}`}/>
    </div>
    </div>
  )
}

export default Utilities