import React from 'react'
import {ReactComponent as ComabeBranco} from '../images/logobranco.svg'
import {ReactComponent as Facebook} from '../images/Iconfacebook.svg'
import {ReactComponent as Instagram} from '../images/Iconinstagram.svg'
import {ReactComponent as Youtube} from '../images/Iconyoutube.svg'
import {ReactComponent as Linkedin} from '../images/Iconlinkedin.svg'
import {ReactComponent as ArrowDownFooter} from '../images/ArrowDownFooter.svg'
import {ReactComponent as Copyright} from '../images/copyright.svg'
import {ReactComponent as LogoEagles} from '../images/LogoEagles.svg'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'


function Footer() {


  return (
    <div className='bg-[#343434] lg:h-[800px] xl:h-[700px] w-full'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap xl:flex-nowrap lg:gap-[80px] xl:justify-between w-full pt-[60px] lg:pt-[100px] xl:pt-[160px]'>
          <div className='flex flex-wrap lg:flex-nowrap flex-col w-full lg:w-[20%] xl:w-[18%]'>
            <Link to={'/#header'}> <ComabeBranco className='w-[100px] lg:w-auto'/> </Link>
            <h2 className='text-white text-[18px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mt-[30px] lg:mt-[70px] lg:mb-[20px]'>Nossos canais de atendimento</h2>
            <a href='tel:555426212300'> <p className='text-[#8E8D8D] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-normal'>+55 54 2621-2300</p></a>
            <a href='mailto:comabe@comabe.com.br'> <p className='text-[#8E8D8D] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-normal'>comabe@comabe.com.br</p></a>
          </div>

          <div className='flex flex-col lg:w-[50%] xl:w-[20%]'>
            <h2 className='text-white text-[18px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[15px] lg:mb-[30px] mt-[30px] lg:mt-0'>Aonde estamos?</h2>
            <p className='text-[#8E8D8D] w-80w lg:w-auto font-light lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] lg:mb-[30px]'>Rua Três de Outubro, 120 Cidade Alta, Bento Gonçalves - RS +55 54 2621.2300</p>
            <p className='text-[#8E8D8D] w-80w lg:w-auto font-light lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] lg:mb-[30px]'>Campo Bom - RS +55 51 3396.2300</p>
            <p className='text-[#8E8D8D] w-80w lg:w-auto font-light lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>Passo de Torres - SC +55 54 2621.2352</p>
          </div>

          <div className='flex w-49w flex-col lg:w-[20%] xl:w-[18%]'>
            <h2 className='text-white text-[18px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[30px] mt-[30px] lg:mt-0'>Institucional</h2>
           <HashLink className='w-max' to={'/Quem-Somos#header'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Quem Somos</p></HashLink> 
            <p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Trabalhe Conosco</p>
            <p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Seja um Revendedor</p>
            <HashLink to={'/Contato#header'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Contato</p></HashLink>
          </div>

          <div className='flex w-49w flex-col xl:w-[18%] 2xl:w-[16%]'>
            <h2 className='text-white text-[18px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[30px] mt-[30px] lg:mt-0'>Soluções</h2>
            <HashLink to={'/Solucoes#header'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Outsourcing de impressão</p></HashLink> 
            <HashLink to={'/Solucoes#header'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Processo de monitoramento</p></HashLink>
            <HashLink to={'/Business-Scan#gerenciamentoeletronico'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Gerenciamento eletrônico de documentos</p></HashLink>
            <p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Assistência Técnica</p>
          </div>

          <div className='flex flex-wrap lg:flex-nowrap flex-row lg:flex-col w-full lg:w-auto'>
          <h2 className='text-white w-full text-[18px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[30px]'>Redes Sociais</h2>
          <a className='w-40w lg:w-auto' target='_blank' rel='noreferrer' href='https://www.facebook.com/comabeoficial'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Facebook /> Facebook</p></a>  
          <a className='w-40w lg:w-auto' target='_blank' rel='noreferrer' href='https://www.instagram.com/comabeoficial/'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Instagram /> Instagram</p></a>  
          <a className='w-40w lg:w-auto' target='_blank' rel='noreferrer' href='https://www.youtube.com/user/comabers'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Youtube /> Youtube</p></a>  
          <a className='w-40w lg:w-auto' target='_blank' rel='noreferrer' href='https://br.linkedin.com/company/comabeoficial'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Linkedin /> Linkedin</p></a>  
          <p className='text-white font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>comabeoficial</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between pb-8 lg:pb-0 mt-[40px] lg:mt-[100px] border-t border-gray-500 pt-[30px]'>
        <span className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light lg:w-[33%] xl:w-[33%] 2xl:w-[28%] flex items-center justify-center lg:justify-start gap-[8px]'><Copyright className='mt-[3px]'/>2022 - Comabe. Todos os direitos reservados</span>
        <span className='text-white lg:text-[15px] hidden lg:flex xl:text-[16px] 2xl:text-[18px] font-medium lg:w-[30%] xl:w-[30%] 2xl:w-[50%] justify-center items-center gap-[15px]'><a href='#header' className='flex items-center gap-[15px]'>Voltar ao topo <ArrowDownFooter className='mt-[5px]'/></a> </span>
        <span className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light lg:w-[25%] xl:w-[25%] 2xl:w-[25%] flex justify-center lg:justify-end items-center gap-[8px]'><a target='_blank' href='https://eaglesx.com' className='flex items-center gap-[8px]'>Desenvolvido por <LogoEagles className='w-[65px] mt-[4px]'/></a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer