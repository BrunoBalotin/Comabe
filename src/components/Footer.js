import React from 'react'
import {ReactComponent as ComabeBranco} from '../images/logobranco.svg'
import {ReactComponent as Facebook} from '../images/Iconfacebook.svg'
import {ReactComponent as Instagram} from '../images/Iconinstagram.svg'
import {ReactComponent as Youtube} from '../images/Iconyoutube.svg'
import {ReactComponent as Linkedin} from '../images/Iconlinkedin.svg'
import {ReactComponent as ArrowDownFooter} from '../images/ArrowDownFooter.svg'
import {ReactComponent as Copyright} from '../images/copyright.svg'
import {ReactComponent as LogoEagles} from '../images/LogoEagles.svg'
import { HashLink as Link } from 'react-router-hash-link'

function Footer() {


  return (
    <div className='bg-[#343434] lg:h-[800px] xl:h-[700px] w-full'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-wrap xl:flex-nowrap lg:gap-[80px] xl:justify-between w-full lg:pt-[100px] xl:pt-[160px]'>
          <div className='flex flex-col lg:w-[20%] xl:w-[18%]'>
            <Link to={'/'}> <ComabeBranco /> </Link>
            <h2 className='text-white lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mt-[70px] mb-[20px]'>Envie um e-mail</h2>
            <a href='mailto:comabe@comabe.com.br'> <p className='text-[#8E8D8D] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-normal'>comabe@comabe.com.br</p></a>
          </div>

          <div className='flex flex-col lg:w-[50%] xl:w-[20%]'>
            <h2 className='text-white lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[30px]'>Aonde estamos?</h2>
            <p className='text-[#8E8D8D] font-light lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[30px]'>Rua Três de Outubro, 120 Cidade Alta, Bento Gonçalves - RS +55 54 2621.2300</p>
            <p className='text-[#8E8D8D] font-light lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[30px]'>Alameda da Inovação, 270 Campo Bom - RS +55 51 3396.2300</p>
            <p className='text-[#8E8D8D] font-light lg:text-[15px] xl:text-[16px] 2xl:text-[18px]'>Rua Coronel João Fernandes, 195 Passo de Torres - SC +55 54 2621.2352</p>
          </div>

          <div className='flex flex-col lg:w-[20%] xl:w-[18%]'>
            <h2 className='text-white lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[30px]'>Institucional</h2>
           <Link className='w-max' to={'/Quem-Somos'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Quem Somos</p></Link> 
           <Link className='w-max' to={'/Contato#equipe'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Nossa Equipe</p></Link>
            <p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Trabalhe Conosco</p>
            <p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Seja um Revendedor</p>
            <Link to={'/Contato'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Contato</p></Link>
          </div>

          <div className='flex flex-col xl:w-[18%] 2xl:w-[16%]'>
            <h2 className='text-white lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[30px]'>Soluções</h2>
            <Link to={'/Solucoes#outsourcing'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Outsourcing de impressão</p></Link> 
            <Link to={'/Solucoes#monitoramento'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Processo de monitoramento</p></Link>
            <Link to={'/Business-Scan#gerenciamentoeletronico'}><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Gerenciamento eletrônico de documentos</p></Link>
            <p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>Assistência Técnica</p>
          </div>

          <div className='flex flex-col xl:w-auto'>
            <h2 className='text-white lg:text-[17px] xl:text-[18px] 2xl:text-[20px] font-medium mb-[30px]'>Redes Sociais</h2>
          <a target='_blank' rel='noreferrer'  href='https://www.facebook.com/comabeoficial'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Facebook /> Facebook</p></a>  
          <a target='_blank' rel='noreferrer'  href='https://www.instagram.com/comabeoficial/'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Instagram /> Instagram</p></a>  
          <a target='_blank' rel='noreferrer'  href='https://www.youtube.com/user/comabers'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Youtube /> Youtube</p></a>  
          <a target='_blank' rel='noreferrer'  href='https://br.linkedin.com/company/comabeoficial'><p className='text-[#8e8d8d] font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px] flex items-center gap-[15px]'><Linkedin /> Linkedin</p></a>  
          <p className='text-white font-medium lg:text-[15px] xl:text-[16px] 2xl:text-[18px] mb-[15px]'>comabeoficial</p>
          </div>
        </div>

        <div className='flex justify-between mt-[100px] border-t border-gray-500 pt-[30px]'>
        <span className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light lg:w-[33%] xl:w-[33%] 2xl:w-[28%] flex items-center gap-[8px]'><Copyright className='mt-[3px]'/>2022 - Comabe. Todos os direitos reservados</span>
        <span className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium lg:w-[30%] xl:w-[30%] 2xl:w-[50%] flex justify-center items-center gap-[15px]'><a href='#header' className='flex items-center gap-[15px]'>Voltar ao topo <ArrowDownFooter className='mt-[5px]'/></a> </span>
        <span className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light lg:w-[25%] xl:w-[25%] 2xl:w-[25%] flex justify-end items-center gap-[8px]'><a target='_blank' href='https://eaglesx.com' className='flex items-center gap-[8px]'>Desenvolvido por <LogoEagles className='w-[65px] mt-[4px]'/></a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer