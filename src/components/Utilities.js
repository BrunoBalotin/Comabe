import React from 'react'
import {ReactComponent as Revendedor} from '../images/revendedor.svg'
import {ReactComponent as SuporteTecnico} from '../images/suportetecnico.svg'
import {ReactComponent as TrabalheConosco} from '../images/trabalheconosco.svg'
import {ReactComponent as ArrowUtilities} from '../images/arrowutilities.svg'
import './css/Utilities.css'
import { HashLink as Link } from 'react-router-hash-link'

const Utilities = () => {
  return (
    <div className='bg-gradiente-blue h-[323px] flex items-center'>
      <div className='container mx-auto'>
        <div className='w-full flex justify-between'>
          <div className='w-[25%]'>
            <h2 className='lg:text-[26px] xl:text-[28px] 2xl:text-[32px] font-medium text-white'>Como nossa equipe pode ajudar você hoje?</h2>
            <p className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light text-white w-[90%] mt-[30px]'>Selecione a opção desejada ao lado, nosso time lhe retornará o mais breve possível</p>
          </div>

          <div className='flex justify-between lg:w-[73%] xl:w-[65%]'>
            <div className='border lg:px-2 xl:px-4 2xl:px-6 py-5 rounded-xl lg:w-[230px] xl:w-[255px] 2xl:w-[305px]'>
              <h3 className='lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white mb-[20px] flex items-center gap-3'><Revendedor className='lg:w-[16px] xl:w-[17px] 2xl:w-auto'/> Seja um revendedor</h3>
              <p className='text-[14px] font-light text-white w-[90%] mb-[35px]'>Clique aqui para tirar suas dúvidas com o time comercial</p>
              <Link to="/Revendas#header" className='w-max'><span className='text-[14px] font-bold text-white flex items-center gap-2 cursor-pointer w-max'>Ver mais <ArrowUtilities /></span></Link>
            </div>
            <div className='border lg:px-2 xl:px-4 2xl:px-6 py-5 rounded-xl lg:w-[230px] xl:w-[255px] 2xl:w-[305px]'>
              <h3 className='lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white mb-[20px] flex items-center gap-3'><SuporteTecnico className='lg:w-[16px] xl:w-[17px] 2xl:w-auto'/> Suporte Técnico</h3>
              <p className='text-[14px] font-light text-white w-[90%] mb-[35px]'>Acesse os canais de suporte para falar com nossos especialistas</p>
              <span className='text-[14px] font-bold text-white flex items-center gap-2 cursor-pointer w-max'>Ver mais <ArrowUtilities /></span>
            </div>
            <div className='border lg:px-2 xl:px-4 2xl:px-6 py-5 rounded-xl lg:w-[230px] xl:w-[255px] 2xl:w-[305px]'>
              <h3 className='lg:text-[18px] xl:text-[18px] 2xl:text-[20px] font-medium text-white mb-[20px] flex items-center gap-3'><TrabalheConosco className='lg:w-[16px] xl:w-[17px] 2xl:w-auto'/> Trabalhe Conosco</h3>
              <p className='text-[14px] font-light text-white w-[90%] mb-[35px]'>Preencha o formulário, envie o seu currículo e faça parte da equipe</p>
              <span className='text-[14px] font-bold text-white flex items-center gap-2 cursor-pointer w-max'>Ver mais <ArrowUtilities /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utilities